<template>
	<div id="mapContainer"></div>
</template>

<script>
// import markers from "~/static/json/bano-32.json";
export default {
	name: "Map",
	props: {
		long: [Number, String],
		lat: [Number, String],
	},
	data() {
		return {
			center: [],
			mymap: null,
			map_TileStyle:
				"https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png",
			zoom: 15,
			pin: "/img/fontawesome/map-marker.svg",
		};
	},
	methods: {
		async initMap() {
			return new Promise((resolve, reject) => {
				this.center.push(this.long, this.lat);
				this.mymap = new L.map("mapContainer").setView(
					this.center,
					this.zoom
				);
				L.tileLayer(this.map_TileStyle, {
					attribution:
						'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © OSM',
					keepInView: true,
				}).addTo(this.mymap);
				markers.forEach((marker) => {
					L.marker([marker.lat, marker.lon]).addTo(this.mymap);
				});
				if (this.mymap !== null) {
					resolve(() => {
						return true;
					});
				} else {
					reject(new Error("Map cannot be load"));
				}
			});
		},
	},
	mounted() {
		this.initMap().then(() => {
			const pinBoucau = L.icon({
				iconUrl: this.pin,
				iconSize: [38, 95],
			});
			L.marker(this.center, {
				icon: pinBoucau,
			}).addTo(this.mymap);
		});
	},
};
</script>

<style>
@import url(~/static/leaflet/leaflet.css);
</style>
