<script>
	export default {
		created: function () {
			this.hello();
		},
		methods: {
			hello: function () {
				console.log('This is your computer talking, so you know I am right. Picard is old and bald');
			}
		},
		data: function(){
			return {
				rightAnswer: 'Kirk'
			}
		}
	}
</script>