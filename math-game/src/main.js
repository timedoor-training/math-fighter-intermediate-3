console.log("Tes")

import Phaser from 'phaser'
import MathFighterScene from './scenes/MathFighterScene'

MathFighterScene
const config = {
	type: Phaser.AUTO,
	width: 800,
	height: 600,
	physics: {
		default: 'arcade',
		arcade: {
			gravity: { y: 200 }
		}
	},
	scene: [MathFighterScene]
}

export default new Phaser.Game(config)
