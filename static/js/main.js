$(document).ready(function() {
	sessionStorage.hostname = "http://127.0.0.1";
	sessionStorage.port = ":5000/";
})

$(document).on("click", "#nav_quests", function() {
	fadeOutAll(300);
	$("#quests_menu").fadeIn(300);
})

$(document).on("click", "#nav_eduquest", function() {
	fadeOutAll(300);
	$("#status_menu").fadeIn(300);
})

$(document).on("click", "#quests_menu li", function() {
	fadeOutAll(300);
	$("#quests_grid").fadeIn(300);
	$("#quests_grid h1").text($(this).find("a").text());
})

$(document).on("click", ".grid_element", function() {
	fadeOutAll(300);
	$("#question_box").fadeIn(300);
	$("#player").fadeIn(600);
	$("#enemy").fadeIn(600);
})

/* AJAX Requests */

function getQuestion(route) {
	$.ajax({
		method: "GET",
		dataType: "json",
		url: sessionStorage.hostname + sessionStorage.port + route,
		success: function(data) {
			console.log(data)
			$("#question_box #question").text(data);
		},
		error: function(jqXHR, textStatus, errorThrown) {
			console.log(jqXHR.responseText);
		}
	})
}

/* Utility */

function fadeOutAll(time) {
	$("#status_menu").fadeOut(time);
	$("#quests_menu").fadeOut(time);
	$("#quests_grid").fadeOut(time);
	$("#question_box").fadeOut(time);
	$("#player").fadeOut(time);
	$("#enemy").fadeOut(time);
}

function countDown(time) {
	
}
