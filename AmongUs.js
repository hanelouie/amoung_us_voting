var vote = {
	red : 0,
	brown : 0,
	green : 0,
	darkgreen : 0,
	cyan : 0,
	skyblue : 0,
	blue : 0,
	purple : 0,
	violet : 0,
	pink : 0,
};

$(document).ready(
	function(){
		$("#div1").click(
			function() {
				vote.red++;
				$("#p1vote").html("("+vote.red+")");
			}
		);

		$("#div2").click(
			function() {
				vote.brown++;
				$("#p2vote").html("("+vote.brown+")");
			}
		);
	
		$("#div3").click(
			function() {
				vote.green++;
				$("#p3vote").html("("+vote.green+")");
			}
		);

		$("#div4").click(
			function() {
				vote.darkgreen++;
				$("#p4vote").html("("+vote.darkgreen+")");
			}
		);

		$("#div5").click(
			function() {
				vote.cyan++;
				$("#p5vote").html("("+vote.cyan+")");
			}
		);

		$("#div6").click(
			function() {
				vote.skyblue++;
				$("#p6vote").html("("+vote.skyblue+")");
			}
		);

		$("#div7").click(
			function() {
				vote.blue++;
				$("#p7vote").html("("+vote.blue+")");
			}
		);

		$("#div8").click(
			function() {
				vote.purple++;
				$("#p8vote").html("("+vote.purple+")");
			}
		);

		$("#div9").click(
			function() {
				vote.violet++;
				$("#p9vote").html("("+vote.violet+")");
			}
		);

		$("#div10").click(
			function() {
				vote.pink++;
				$("#p10vote").html("("+vote.pink+")");
			}
		);
	}
);
