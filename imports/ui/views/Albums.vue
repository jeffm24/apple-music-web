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
					class="album-expand card bg-light my-3"
				>
					<div class="card-body">
						<div class="row">
							<div class="col-md-3">
								<div class="row mb-2">
									<div class="col-2 col-md-12">
										<img
											:src="row.albumMap[activeAlbumId].artwork"
											class="img-fluid w-100"
										>
									</div>
									<div class="col-10 d-md-none">
										<h5 class="card-title m-0">
											{{ row.albumMap[activeAlbumId].title }}
										</h5>
										<p class="card-text mt-1">
											{{ row.albumMap[activeAlbumId].artist }}
										</p>
									</div>
								</div>
							</div>
							<div class="col-md-9">
								<div class="d-none d-md-block mb-2">
									<h5 class="card-title m-0">
										{{ row.albumMap[activeAlbumId].title }}
									</h5>
									<p class="card-text mt-1">
										{{ row.albumMap[activeAlbumId].artist }}
									</p>
								</div>

								<div class="list-group">
									<button
										v-for="i in 20"
										:key="`song-${i}`"
										type="button"
										class="clickable list-group-item list-group-item-action py-2"
										:class="{ active: (i === 1) }"
									>
										Song {{ i }}
									</button>
								</div>
							</div>
						</div>						
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
				row.albums.push(album);
				row.albumMap[album.id] = album;

				if (row.albums.length === this.numCols) {
					rows.push(row);
					row = {
						id: `row-${rows.length}`,
						albums: [],
						albumMap: {}
					};
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
.album-expand {
	box-shadow: inset 0 0 0.5rem rgba(0, 0, 0, 0.075);
}
</style>
