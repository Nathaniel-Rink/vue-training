<template>
	<div>
		<router-link :to="{path: destinations.brave, query: {myQuery: params.brave.myQuery}}"><button v-on:click="randomRoute('brave')" class="btn btn-primary mx-1">Braveheart</button></router-link>
		<router-link :to="{path: destinations.empire, query: {myQuery: params.empire.myQuery}}"><button v-on:click="randomRoute('empire')" class="btn btn-primary mx-1">Empire Strikes Back</button></router-link>
		<router-link :to="{path: destinations.mel, query: {myQuery: params.mel.myQuery}}"><button v-on:click="randomRoute('mel')" class="btn btn-primary mx-1">Hamlet</button></router-link>
		<router-link :to="{path: destinations.wiz, query: {myQuery: params.wiz.myQuery}}"><button v-on:click="randomRoute('wiz')" class="btn btn-primary mx-1">Wizard of Oz</button></router-link>
	</div>
</template>

<script>
	export default {
		name: 'NavBar',
		created: function(){
			var thisArray = ['brave', 'empire', 'mel', 'wiz'];
			thisArray.forEach((element) => {
				this.randomRoute(element);
			});
		},
		methods: {
			randomRoute(base){
				this.destinations[base] = `/${base}/${this.randomChoice(this.characters[base])}/with/${this.randomChoice(this.weapon[base])}`;
				this.params[base].myQuery = this.randomChoice(this.locale[base]);
			},
			randomChoice(optionsArray){
				const numOpts = optionsArray.length;
				const selected = Math.floor(Math.random() * Math.floor(numOpts));
				return optionsArray[selected];
			}
		},
		data: function(){
			return {
				params: {
					brave: {},
					empire: {},
					mel: {},
					wiz: {}
				},
				destinations: {
					brave: '',
					empire: '',
					mel: '',
					wiz: ''
				},
				characters: {
					brave: [
						'Braveheart',
						'Stephen',
						'Bruce'
					],
					empire: [
						'Vader',
						'Yoda',
						'Luke',
						'Skywalker',
						'Lando',
						'Leia',
						'C3PO',
						'R2D2'
					],
					mel: [
						'Hamlet',
						'Polonius',
						'Horatio',
						'Yorick'
					],
					wiz: [
						'Cowardly Lion',
						'Scarecrow',
						'Dorothy',
						'Toto',
						'Tin Woodsman'
					]
				},
				weapon: {
					brave: [
						'Great Sword',
						'Axe',
						'Dagger',
						'Longbow'
					],
					empire: [
						'Blaster',
						'Light Saber',
						'Slave Chains',
						'Skywalker'
					],
					mel: [
						'Poison in the ear',
						'Poison tipped blade',
						'Furious Slashing through the drapes',
						'Boredom'
					],
					wiz: [
						'Water',
						'Tin Hatchet',
						'Winged Monkey',
						'Teeth',
						'Munchkin Musket',
						'House'
					]
				},
				locale: {
					brave: [
						'Lanark',
						'Stirling Bridge',
						'York',
						'Falkirk'
					],
					empire: [
						'Hoth',
						'Tatooine',
						'The Death Star',
						'Degobbah'
					],
					mel: [
						'Elsinore'
					],
					wiz: [
						'Kansas',
						'The Yellow Brick Road',
						`The Witch's Castle`,
						'The Emerald City'
					]
				}
			}
		}

	}
</script>

