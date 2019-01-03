<template>
  	<div id="main">
		<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
			<router-link to="/" class="navbar-brand">
				Apple Music
			</router-link>

			<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
			</button>

			<div class="collapse navbar-collapse" id="navbarSupportedContent">
				<ul class="navbar-nav mr-auto">
					<li class="nav-item">
						<router-link to="/artists" class="nav-link">
							Artists
						</router-link>
					</li>
					<li class="nav-item">
						<router-link to="/albums" class="nav-link">
							Albums
						</router-link>
					</li>
					<li class="nav-item">
						<router-link to="/songs" class="nav-link">
							Songs
						</router-link>
					</li>
				</ul>
				<form class="form-inline my-2 my-lg-0">
					<input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
					<button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
				</form>
			</div>
		</nav>
		<div class="container">
    		<router-view/>
		</div>
  	</div>
</template>

<script>
import { Meteor } from 'meteor/meteor';

document.addEventListener('musickitloaded', function () {
	MusicKit.configure({
		developerToken: Meteor.settings.public.MusicKitDevToken,
		app: Meteor.settings.public.app,
		bitrate: MusicKit.PlaybackBitrate.HIGH
	});
});
</script> 

<style lang="scss">
#main {
  	font-family: 'Avenir', Helvetica, Arial, sans-serif;
 	-webkit-font-smoothing: antialiased;
  	-moz-osx-font-smoothing: grayscale;
  	text-align: center;
  	color: #2c3e50;

	>.container {
		margin: 20px auto;
	}
}
</style>
