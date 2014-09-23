var igeClientConfig = {
	include: [
		/* Your custom game JS scripts */
		'./gameClasses/ui/Dialog.js',
		'./gameClasses/ui/MarketDialog.js',
		'./gameClasses/ui/CoinParticle.js',

        './gameClasses/ui/CoinDialog.js',

        './clientBuy.js',

		// Game objects
		'./gameClasses/base/GameObject.js',
		/*'./gameClasses/objects/OakTree.js',
		'./gameClasses/objects/SmokeyHut.js',
		'./gameClasses/objects/Hut1.js',
		'./gameClasses/objects/Hut2.js',
		'./gameClasses/objects/WoodSmall.js',
		'./gameClasses/objects/WoodLarge.js',*/
		'./gameClasses/base/Villager.js',

        './clientApiSupport.js',
        './clientHelpers.js',
        './gameObjects.js',
        '/catalog',

		// Graphs
		'./graphs/GraphLevel1.js',
		'./graphs/GraphUi.js',

		/* Standard game scripts */
		'./client.js',
		'./index.js',
	]
};

if (typeof(module) !== 'undefined' && typeof(module.exports) !== 'undefined') { module.exports = igeClientConfig; }
