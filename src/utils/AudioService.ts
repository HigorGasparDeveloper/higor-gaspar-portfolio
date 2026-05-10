class AudioEngine {
  private ctx: AudioContext | null = null;
  private isMuted: boolean = false;
  private bgmGain: GainNode | null = null;
  private isPlayingBgm: boolean = false;

  init() {
    if (!this.ctx) {
      this.ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  toggleMute(muted: boolean) {
    this.isMuted = muted;
    if (this.bgmGain && this.ctx) {
      this.bgmGain.gain.setTargetAtTime(this.isMuted ? 0 : 0.15, this.ctx.currentTime, 0.5);
    }
  }

  private playTone(freq: number, type: OscillatorType, duration: number, vol: number = 0.1) {
    if (this.isMuted || !this.ctx) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
    
    gain.gain.setValueAtTime(vol, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + duration);

    osc.connect(gain);
    gain.connect(this.ctx.destination);
    
    osc.start();
    osc.stop(this.ctx.currentTime + duration);
  }

  playHover() {
    // Soft subtle hover sound like an RPG menu
    this.playTone(440, 'sine', 0.1, 0.05);
  }

  playSelect() {
    // Gentle confirmation sound
    if (this.isMuted || !this.ctx) return;
    const now = this.ctx.currentTime;
    
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'triangle';
    
    osc.frequency.setValueAtTime(659.25, now); // E5
    osc.frequency.exponentialRampToValueAtTime(880, now + 0.1); // A5
    
    gain.gain.setValueAtTime(0.0, now);
    gain.gain.linearRampToValueAtTime(0.08, now + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.2);

    osc.connect(gain);
    gain.connect(this.ctx.destination);
    
    osc.start(now);
    osc.stop(now + 0.2);
  }

  playLevelUp() {
    if (this.isMuted || !this.ctx) return;
    const now = this.ctx.currentTime;
    
    // Very serene fantasy level up (harp-like arpeggio)
    const freqs = [329.63, 440.00, 523.25, 659.25, 880.00]; // E, A, C, E, A
    freqs.forEach((f, i) => {
      const osc = this.ctx!.createOscillator();
      const gain = this.ctx!.createGain();
      osc.type = 'sine';
      osc.frequency.value = f;
      
      const time = now + i * 0.08;
      gain.gain.setValueAtTime(0, time);
      gain.gain.linearRampToValueAtTime(0.1, time + 0.05);
      gain.gain.exponentialRampToValueAtTime(0.001, time + 0.6);
      
      osc.connect(gain);
      gain.connect(this.ctx!.destination);
      
      osc.start(time);
      osc.stop(time + 0.6);
    });
  }

  startBGM() {
    if (!this.ctx || this.isPlayingBgm) return;
    this.isPlayingBgm = true;
    
    this.bgmGain = this.ctx.createGain();
    this.bgmGain.gain.value = this.isMuted ? 0 : 0.15;
    this.bgmGain.connect(this.ctx.destination);
    
    const playChord = (frequencies: number[], duration: number) => {
      if (!this.isPlayingBgm || !this.ctx) return;
      const now = this.ctx.currentTime;
      frequencies.forEach(freq => {
        const osc = this.ctx!.createOscillator();
        const gain = this.ctx!.createGain();
        osc.type = 'triangle'; // Soft organ/pad feel
        osc.frequency.value = freq;
        
        gain.gain.setValueAtTime(0, now);
        // Slow attack, slow release (ambient pad)
        gain.gain.linearRampToValueAtTime(0.02, now + duration * 0.4);
        gain.gain.linearRampToValueAtTime(0, now + duration);
        
        osc.connect(gain);
        gain.connect(this.bgmGain!);
        
        osc.start(now);
        osc.stop(now + duration);
      });
    };

    const loop = () => {
      if (!this.isPlayingBgm) return;
      // Calm RPG Village / Save Room chords:
      // Fmaj9 -> Em7 -> Dm7 -> Cmaj7
      const chords = [
        [174.61, 261.63, 329.63, 392.00], // Fmaj7
        [164.81, 246.94, 293.66, 392.00], // Em7
        [146.83, 220.00, 261.63, 349.23], // Dm7
        [130.81, 196.00, 246.94, 329.63]  // Cmaj7
      ];
      
      let timeOffset = 0;
      chords.forEach(chord => {
        setTimeout(() => playChord(chord, 6), timeOffset * 1000);
        timeOffset += 5; 
      });
      
      setTimeout(loop, timeOffset * 1000);
    };
    
    loop();
  }
}

export const audio = new AudioEngine();
