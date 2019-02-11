<template>
	<div class="miniMovie">
		<div class="miniMovie__figure">
			<div
				class="miniMovie__poster"
				:style="posterImage"
			>
				<div class="miniMovie__rate">
					{{ rate }}
				</div>
			</div>
			<div class="miniMovie__states">
				<div
					v-if="heart"
					class="miniMovie__state | miniMovie__state--heart"
				>
					<icon name="heart" />
				</div>
				<div
					v-if="watched"
					class="miniMovie__state | miniMovie__state--watched"
				>
					<icon name="double-check" />
				</div>
				<div
					v-if="later"
					class="miniMovie__state | miniMovie__state--later"
				>
					<icon name="flag" />
				</div>
			</div>
		</div>
		<div class="miniMovie__details">
			<div class="miniMovie__detail">
				<div class="miniMovie__textInfo | miniMovie__textInfo--title">{{ title }}</div>
				<div class="miniMovie__textInfo | miniMovie__textInfo--year">{{ year }}</div>
			</div>
			<div class="miniMovie__detail">
				<div class="miniMovie__textInfo | miniMovie__textInfo--director">{{ director }}</div>
			</div>
			<miniMovie-awards :awards="awards"/>
		</div>
	</div>
</template>

<script>
import MiniMovieAwards from './MiniMovie.Awards.vue';

export default {
	name: 'MiniMovie',
	components: {
		MiniMovieAwards
	},
	props: {
		title: {
			type: String,
			required: true
		},
		year: {
			type: String,
			required: true
		},
		director: {
			type: String,
			required: true
		},
		poster: {
			type: String,
			required: true
		},
		rate: {
			type: Number,
			required: true,
			default: 0
		},
		heart: {
			type: Boolean,
			required: true,
			default: false
		},
		watched: {
			type: Boolean,
			required: true,
			default: false
		},
		later: {
			type: Boolean,
			required: true,
			default: false
		},
		awards: {
			type: Array,
			required: false,
			default: () => {
				return [];
			}
		}
	},
	data() {
		return {};
	},
	computed: {
		posterImage() {
			return {
				'background-image': `url(/files/${this.poster})`
			};
		}
	}
};
</script>

<style scoped lang="scss">
.miniMovie {
	box: vertical;

	&__figure {
		box: horizontal;
	}

	&__poster {
		flex-grow: 1;
		background-color: mix(black, $background-color, 10%);
		background-size: 100%;
		background-repeat: no-repeat;
		position: relative;
		box-shadow: $miniMovie__box-shadow;
		&:before {
			display: block;
			content: '';
			width: 100%;
			padding-top: (3 / 2) * 100%;
		}
	}

	&__rate {
		position: absolute auto 0 0 auto;
		background-color: $white-6;
		border-radius: 50%;
		padding: 1em;
		size: 3em;
		box: center middle;
		font-size: 0.8em;
		transform: translate(50%);
		margin-bottom: $gutter--thin;
		color: $primary-color;
	}

	&__states {
		box: vertical center;
		padding: $gutter--thinner;
		width: 2.7em;
	}

	&__state {
		margin-bottom: 0.5em;
		width: 1em;
		font-size: 1.4em;

		&--heart {
			color: $red;
		}

		&--watched {
			color: $blue--light-1;
		}

		&--later {
			color: $gold--dark-1;
			font-size: 1.2em;
		}
	}

	&__details {
		width: 250px;
		padding: $gutter--thin;
		color: $miniMovie__details-color;
		font-family: $secondary-typeface;
		font-weight: 500;
	}

	&__detail {
		box: horizontal middle space-between;
		margin-bottom: $gutter--thinner;
	}

	&__textInfo {
		text-transform: capitalize;

		&--title {
			font-family: $default-typeface;
			color: $miniMovie__title-color;
		}

		&--year {
			font-size: ms(-1);
			color: mix($background-color, $miniMovie__details-color, 60%);
		}

		&--director {
			font-size: 0.9em;
			color: mix($background-color, $miniMovie__details-color, 20%);
		}
	}
}
</style>
