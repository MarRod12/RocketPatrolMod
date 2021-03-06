class Menu extends Phaser.Scene {
    constructor() {
        super("menuScene");
    }
    /*
      Quack audio taken from: "https://www.myinstants.com/instant/quackmp3/"
      Splash audio taken from: "https://www.fesliyanstudios.com/royalty-free-sound-effects-download/water-splashing-20"
    */

    preload() {
        // load audio
        this.load.audio('sfx_select', './assets/blip_select12.wav');
        this.load.audio('quack', './assets/quack.mp3');
        this.load.audio('splash', './assets/Cannonball-Splash-A1-www.fesliyanstudios.com.mp3');
        this.load.image('waves', './assets/oceanwaves.png');
    }

    create() {

        this.opening = this.add.tileSprite(0,0, 640, 480, 'waves').setOrigin(0,0);

        // menu text configuration
        let menuConfig = {
            fontFamily: 'Courier',
            fontSize: '28px',
            backgroundColor: '#8a5a1c',
            color: '#F3B141',
            align: 'right',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 0
        }
        
        // show menu text
        this.add.text(game.config.width/2, game.config.height/2 - borderUISize - borderPadding, 'Quack Quack', menuConfig).setOrigin(0.5);
        menuConfig.backgroundColor = '#8a5a1c';
        menuConfig.color = '#ffffff';
        this.add.text(game.config.width/2, game.config.height/2, 'Use ←→ arrows to move & (F) to fire', menuConfig).setOrigin(0.5);
        this.add.text(game.config.width/2, game.config.height/2 + borderUISize + borderPadding, 'Press ← for Novice or → for Expert', menuConfig).setOrigin(0.5);

        // define keys
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
    }

    update() {

        this.opening.tilePositionX -= 3;
      
        if (Phaser.Input.Keyboard.JustDown(keyLEFT)) {
          // Novice mode
          game.settings = {
            spaceshipSpeed: 5,
            gameTimer: 60000    
          }
          this.sound.play('sfx_select');
          this.scene.start("playScene");    
        }
        if (Phaser.Input.Keyboard.JustDown(keyRIGHT)) {
          // Expert mode
          game.settings = {
            spaceshipSpeed: 8,
            gameTimer: 45000    
          }
          this.sound.play('sfx_select');
          this.scene.start("playScene");    
        }
      }
}
