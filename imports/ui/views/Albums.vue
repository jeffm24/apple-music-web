<template>
	<div id="albums">
		<h1>Albums</h1>
		<div 
			v-for="row in albumRows"
			:key="row.id"
		>
			<div
				class="album-row mb-2"
				:style="{ 'grid-template-columns': `repeat(${numCols}, 1fr)` }"
			>
				<Album
					v-for="album in row.albums"
					:key="album.id"
					
					v-bind="album"
					:active="album.id === activeAlbumId"
					
					@toggled="toggleAlbum"
				/>
			</div>
			<TransitionExpand>
				<div
					v-if="row.albumMap[activeAlbumId]"
					class="card bg-light my-2"
				>
					<div class="card-body">
						<h5 class="card-title m-0">
							{{ row.albumMap[activeAlbumId].title }}
						</h5>
						<p class="card-text mt-1">
							{{ row.albumMap[activeAlbumId].artist }}
						</p>
					</div>
				</div>
			</TransitionExpand>
		</div>
	</div>
</template>

<script>
import Album from '/imports/ui/components/Album.vue';
import TransitionExpand from '/imports/ui/components/transitions/TransitionExpand.vue';

const MAX_COL_SIZE = 12,
	colSizeMap = {
		xs: 12,
		sm: 6,
		md: 4,
		lg: 3,
		xl: 2
	};

export default {
	name: 'Albums',
	components: {
		Album,
		TransitionExpand
	},
	data() {
		const albums = [];

		for (let i = 0; i < 100; i++) {
			albums.push({
				id: `album-${i}`,
				title: `Test Album ${i}`,
				artist: `Test Artist ${i}`,
				artwork: '/logo.png'
			});
		}
		
		return {
			numCols: this.getNumCols(),
			albums,
			activeAlbumId: null
		};
	},
	computed: {
		albumRows() {
			const rows = [];

			let row = {
				id: `row-${rows.length}`,
				albums: [],
				albumMap: {}
			};

			for (const album of this.albums) {
				if (row.albums.length === this.numCols) {
					rows.push(row);
					row = {
						id: `row-${rows.length}`,
						albums: [],
						albumMap: {}
					};
				} else {
					row.albums.push(album);
					row.albumMap[album.id] = album;
				}
			}

			if (row.albums.length) {
				rows.push(row);
			}

			return rows;
		}
	},
	mounted() {
		this.$nextTick(() => {
			window.addEventListener('resize', this.setNumCols);
		});
	},
	beforeDestroy() {
		window.removeEventListener('resize', this.setNumCols);
	},
	methods: {
		getNumCols() {
			const { innerWidth } = window;

			let colSize;

			if (innerWidth >= 1200) {
				colSize = colSizeMap.xl;
			} else if (innerWidth >= 992) {
				colSize = colSizeMap.lg;
			} else if (innerWidth >= 768) {
				colSize = colSizeMap.md;
			} else if (innerWidth >= 576) {
				colSize = colSizeMap.sm;
			} else {
				colSize = colSizeMap.xs;
			}

			return MAX_COL_SIZE / colSize;
		},
		setNumCols() {
			this.numCols = this.getNumCols();
		},
		toggleAlbum(albumId) {
			this.activeAlbumId = (!this.activeAlbumId || albumId !== this.activeAlbumId)
				? albumId
				: null;
		}		
	}
};
</script>

<style scoped>
.album-row {
	display: grid;
	grid-gap: 10px;
}
</style>
