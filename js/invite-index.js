let acc = $('#account').val().trim();
let bool = true;
let sec = "";

let token = '';

$(document).ready(function () {
	$(".testimonial_slider").owlCarousel({
		// loop:true,
		responsiveClass: true,
		nav: true,
		margin: 20,
		dots: false,
		rewindNav: true,
		navText: [
			"<i class='fas fa-chevron-left'></i>",
			'<i class="fas fa-chevron-right"></i>',
		],
		responsive: {
			0: {
				items: 1,
			},
			992: {
				items: 2,
			},
		},
	});
});

$(document).ready(function () {
	$(".speaker_slider").owlCarousel({
		// loop:true,
		margin: 80,
		// center:true,
		responsiveClass: true,
		nav: true,
		dots: false,
		navText: [
			"<i class='fas fa-chevron-left'></i>",
			'<i class="fas fa-chevron-right"></i>',
		],
		responsive: {
			0: {
				items: 1,
			},
			992: {
				items: 3,
			},
		},
	});
});

$("button").click(function (event) {
	event.preventDefault();
});
// THỜI GIAN TỔ CHỨC
let invtime;
$("#time").click(function () {
	if (bool) {
		$(this).toggleClass("d-none");
		$("#time-edit").css("display", "flex");
	}
});
document.getElementById("time-input").addEventListener("input", (e) => {
	invtime = e.target.value;
});
$("#time-save").click(function () {
	$("#time-edit").hide();
	$("#time").removeClass("d-none");
	$("#time").html(invtime);
});

// NGAY TO CHUC
let invdate;
$("#date").click(function () {
	if (bool) {
		$(this).toggleClass("d-none");
		$("#date-edit").css("display", "flex");
	}
});
document.getElementById("date-input").addEventListener("input", (e) => {
	invdate = e.target.value;
});
$("#date-save").click(function () {
	$("#date-edit").hide();
	$("#date").removeClass("d-none");
	$("#date").html(invdate);
});

// TEN THU MOI
let invheading;
$("#invite-heading").click(function () {
	if (bool) {
		$(this).toggleClass("d-none");
		$("#invite-heading-edit").css("display", "flex");
	}
});
document
	.getElementById("invite-heading-input")
	.addEventListener("input", (e) => {
		invheading = e.target.value;
	});
$("#invite-heading-save").click(function () {
	$("#invite-heading-edit").hide();
	$("#invite-heading").removeClass("d-none");
	$("#invite-heading").html(invheading);
});

// NOI DUNG THU MOI
let invtext;
$("#home-text").click(function () {
	if (bool) {
		$(this).toggleClass("d-none");
		$("#home-text-edit").css("display", "flex");
	}
});
document.getElementById("home-text-input").addEventListener("input", (e) => {
	invtext = e.target.value;
});
$("#home-text-save").click(function () {
	$("#home-text-edit").hide();
	$("#home-text").removeClass("d-none");
	$("#home-text").html(invtext);
});

// TÊN TOPIC
let invtopic;
$("#invite-topic").click(function () {
	if (bool) {
		$(this).toggleClass("d-none");
		$("#invite-topic-edit").css("display", "flex");
	}
});
document.getElementById("invite-topic-input").addEventListener("input", (e) => {
	invtopic = e.target.value;
});
$("#invite-topic-save").click(function () {
	$("#invite-topic-edit").hide();
	$("#invite-topic").removeClass("d-none");
	$("#invite-topic").html(invtopic);
});

// NỘI DUNG CHIA SẺ
let topictxt;
$("#topic-text").click(function () {
	if (bool) {
		$(this).toggleClass("d-none");
		$("#topic-text-edit").css("display", "flex");
	}
});
document.getElementById("topic-text-input").addEventListener("input", (e) => {
	invtopic = e.target.value;
});
$("#topic-text-save").click(function () {
	$("#topic-text-edit").hide();
	$("#topic-text").removeClass("d-none");
	$("#topic-text").html(invtopic);
});

// Tên SPEAKER 1
let spkname1;
$("#speaker-name-1").click(function () {
	if (bool) {
		$(this).toggleClass("d-none");
		$("#speaker-name-1-edit").css("display", "flex");
	}
});
document
	.getElementById("speaker-name-1-input")
	.addEventListener("input", (e) => {
		spkname1 = e.target.value;
	});
$("#speaker-name-1-save").click(function () {
	$("#speaker-name-1-edit").hide();
	$("#speaker-name-1").removeClass("d-none");
	$("#speaker-name-1").html(spkname1);
});

// CHỨC DANH SPEAKER 1
let speakerpos1;
$("#speaker-pos-1").click(function () {
	if (bool) {
		$(this).toggleClass("d-none");
		$("#speaker-pos-1-edit").css("display", "flex");
	}
});
document
	.getElementById("speaker-pos-1-input")
	.addEventListener("input", (e) => {
		speakerpos1 = e.target.value;
	});
$("#speaker-pos-1-save").click(function () {
	if (speakerpos1.trim() !== "") {
		$("#speaker-pos-1-edit").hide();
		$("#speaker-pos-1").removeClass("d-none");
		$("#speaker-pos-1").html(speakerpos1);
	} else return;
});

// Tên SPEAKER 2
let spkname2;
$("#speaker-name-2").click(function () {
	if (bool) {
		$(this).toggleClass("d-none");
		$("#speaker-name-2-edit").css("display", "flex");
	}
});
document
	.getElementById("speaker-name-2-input")
	.addEventListener("input", (e) => {
		spkname2 = e.target.value;
	});
$("#speaker-name-2-save").click(function () {
	if (spkname2.trim() !== "") {
		$("#speaker-name-2-edit").hide();
		$("#speaker-name-2").removeClass("d-none");
		$("#speaker-name-2").html(spkname2);
	} else return;
});

// CHỨC DANH SPEAKER 2
let speakerpos2;
$("#speaker-pos-2").click(function () {
	if (bool) {
		$(this).toggleClass("d-none");
		$("#speaker-pos-2-edit").css("display", "flex");
	}
});
document
	.getElementById("speaker-pos-2-input")
	.addEventListener("input", (e) => {
		speakerpos2 = e.target.value;
	});
$("#speaker-pos-2-save").click(function () {
	if (speakerpos2.trim() !== "") {
		$("#speaker-pos-2-edit").hide();
		$("#speaker-pos-2").removeClass("d-none");
		$("#speaker-pos-2").html(speakerpos2);
	} else return;
});

// Tên SPEAKER 3
let spkname3;
$("#speaker-name-3").click(function () {
	if (bool) {
		$(this).toggleClass("d-none");
		$("#speaker-name-3-edit").css("display", "flex");
	}
});
document
	.getElementById("speaker-name-3-input")
	.addEventListener("input", (e) => {
		spkname3 = e.target.value;
	});
$("#speaker-name-3-save").click(function () {
	if (spkname3.trim() !== "") {
		$("#speaker-name-3-edit").hide();
		$("#speaker-name-3").removeClass("d-none");
		$("#speaker-name-3").html(spkname3);
	} else return;
});

// CHỨC DANH SPEAKER 3
let speakerpos3;
$("#speaker-pos-3").click(function () {
	if (bool) {
		$(this).toggleClass("d-none");
		$("#speaker-pos-3-edit").css("display", "flex");
	}
});
document
	.getElementById("speaker-pos-3-input")
	.addEventListener("input", (e) => {
		speakerpos3 = e.target.value;
	});
$("#speaker-pos-3-save").click(function () {
	if (speakerpos3.trim() !== "") {
		$("#speaker-pos-3-edit").hide();
		$("#speaker-pos-3").removeClass("d-none");
		$("#speaker-pos-3").html(speakerpos3);
	} else return;
});

// Tên SPEAKER 4
let spkname4;
$("#speaker-name-4").click(function () {
	if (bool) {
		$(this).toggleClass("d-none");
		$("#speaker-name-4-edit").css("display", "flex");
	}
});
document
	.getElementById("speaker-name-4-input")
	.addEventListener("input", (e) => {
		spkname4 = e.target.value;
	});
$("#speaker-name-4-save").click(function () {
	if (spkname4.trim() !== "") {
		$("#speaker-name-4-edit").hide();
		$("#speaker-name-4").removeClass("d-none");
		$("#speaker-name-4").html(spkname4);
	} else return;
});

// CHỨC DANH SPEAKER 4
let speakerpos4;
$("#speaker-pos-4").click(function () {
	if (bool) {
		$(this).toggleClass("d-none");
		$("#speaker-pos-4-edit").css("display", "flex");
	}
});
document
	.getElementById("speaker-pos-4-input")
	.addEventListener("input", (e) => {
		speakerpos4 = e.target.value;
	});
$("#speaker-pos-4-save").click(function () {
	if (speakerpos4.trim() !== "") {
		$("#speaker-pos-4-edit").hide();
		$("#speaker-pos-4").removeClass("d-none");
		$("#speaker-pos-4").html(speakerpos4);
	} else return;
});

// TÊN ADS
let adsheading;
$("#ads-heading").click(function () {
	if (bool) {
		$(this).toggleClass("d-none");
		$("#ads-heading-edit").css("display", "flex");
	}
});
document.getElementById("ads-heading-input").addEventListener("input", (e) => {
	adsheading = e.target.value;
});
$("#ads-heading-save").click(function () {
	if (adsheading.trim() !== "") {
		$("#ads-heading-edit").hide();
		$("#ads-heading").removeClass("d-none");
		$("#ads-heading").html(adsheading);
	} else return;
});

// NỘI DUNG PROMOTION
let adstxt;
$("#ad-content").click(function () {
	if (bool) {
		$(this).toggleClass("d-none");
		$("#ad-content-edit").css("display", "flex");
	}
});
document.getElementById("ad-content-input").addEventListener("input", (e) => {
	adstxt = e.target.value;
});
$("#ad-content-save").click(function () {
	if (adstxt.trim() !== "") {
		$("#ad-content-edit").hide();
		$("#ad-content").removeClass("d-none");
		$("#ad-content").html(adstxt);
	} else return;
});

// TEXT BUTTON TOI PHAN DANG KI
let toregbtn;
$("#to-reg-btn").click(function () {
	if (bool) {
		$(this).toggleClass("d-none");
		$("#to-reg-btn-edit").css("display", "flex");
	}
});
document.getElementById("to-reg-btn-input").addEventListener("input", (e) => {
	toregbtn = e.target.value;
});
$("#to-reg-btn-save").click(function () {
	if (toregbtn.trim() !== "") {
		$("#to-reg-btn-edit").hide();
		$("#to-reg-btn").removeClass("d-none");
		$("#to-reg-btn").html(toregbtn);
	} else return;
});

// PARTNER HEADING
let partnerheading;
$("#partner-heading").click(function () {
	if (bool) {
		$(this).toggleClass("d-none");
		$("#partner-heading-edit").css("display", "flex");
	}
});
document
	.getElementById("partner-heading-input")
	.addEventListener("input", (e) => {
		partnerheading = e.target.value;
	});
$("#partner-heading-save").click(function () {
	if (partnerheading.trim() !== "") {
		$("#partner-heading-edit").hide();
		$("#partner-heading").removeClass("d-none");
		$("#partner-heading").html(partnerheading);
	} else return;
});

// PARTNER TEXT SAVE
let partnertext;
$("#partner-text").click(function () {
	if (bool) {
		$(this).toggleClass("d-none");
		$("#partner-text-edit").css("display", "flex");
	}
});
document.getElementById("partner-text-input").addEventListener("input", (e) => {
	partnertext = e.target.value;
});
$("#partner-text-save").click(function () {
	if (partnertext.trim() !== "") {
		$("#partner-text-edit").hide();
		$("#partner-text").removeClass("d-none");
		$("#partner-text").html(partnertext);
	} else return;
});

// TÊN ĐỐI TÁC 1
let partnername1;
$("#partner-name-1").click(function () {
	if (bool) {
		$(this).toggleClass("d-none");
		$("#partner-name-1-edit").css("display", "flex");
	}
});
document
	.getElementById("partner-name-1-input")
	.addEventListener("input", (e) => {
		partnername1 = e.target.value;
	});
$("#partner-name-1-save").click(function () {
	$("#partner-name-1-edit").hide();
	$("#partner-name-1").removeClass("d-none");
	$("#partner-name-1").html(partnername1);
});

// VAI TRÒ ĐỐI TÁC 1
let partnerpos1;
$("#partner-pos-1").click(function () {
	if (bool) {
		$(this).toggleClass("d-none");
		$("#partner-pos-1-edit").css("display", "flex");
	}
});
document
	.getElementById("partner-pos-1-input")
	.addEventListener("input", (e) => {
		partnerpos1 = e.target.value;
	});
$("#partner-pos-1-save").click(function () {
	$("#partner-pos-1-edit").hide();
	$("#partner-pos-1").removeClass("d-none");
	$("#partner-pos-1").html(partnerpos1);
});

// TÊN ĐỐI TÁC 2
let partnername2;
$("#partner-name-2").click(function () {
	if (bool) {
		$(this).toggleClass("d-none");
		$("#partner-name-2-edit").css("display", "flex");
	}
});
document
	.getElementById("partner-name-2-input")
	.addEventListener("input", (e) => {
		partnername2 = e.target.value;
	});
$("#partner-name-2-save").click(function () {
	$("#partner-name-2-edit").hide();
	$("#partner-name-2").removeClass("d-none");
	$("#partner-name-2").html(partnername2);
});

// VAI TRÒ ĐỐI TÁC 2
let partnerpos2;
$("#partner-pos-2").click(function () {
	if (bool) {
		$(this).toggleClass("d-none");
		$("#partner-pos-2-edit").css("display", "flex");
	}
});
document
	.getElementById("partner-pos-2-input")
	.addEventListener("input", (e) => {
		partnerpos2 = e.target.value;
	});
$("#partner-pos-2-save").click(function () {
	$("#partner-pos-2-edit").hide();
	$("#partner-pos-2").removeClass("d-none");
	$("#partner-pos-2").html(partnerpos2);
});

// TÊN ĐỐI TÁC 3
let partnername3;
$("#partner-name-3").click(function () {
	if (bool) {
		$(this).toggleClass("d-none");
		$("#partner-name-3-edit").css("display", "flex");
	}
});
document
	.getElementById("partner-name-3-input")
	.addEventListener("input", (e) => {
		partnername3 = e.target.value;
	});
$("#partner-name-3-save").click(function () {
	$("#partner-name-3-edit").hide();
	$("#partner-name-3").removeClass("d-none");
	$("#partner-name-3").html(partnername3);
});

// VAI TRÒ ĐỐI TÁC 3
let partnerpos3;
$("#partner-pos-3").click(function () {
	if (bool) {
		$(this).toggleClass("d-none");
		$("#partner-pos-3-edit").css("display", "flex");
	}
});
document
	.getElementById("partner-pos-3-input")
	.addEventListener("input", (e) => {
		partnerpos3 = e.target.value;
	});
$("#partner-pos-3-save").click(function () {
	$("#partner-pos-3-edit").hide();
	$("#partner-pos-3").removeClass("d-none");
	$("#partner-pos-3").html(partnerpos3);
});

// AVT CẢM NGHĨ 1

const inputTestimonial1 = document.getElementById("avt-testimonial-1-input");
const imgTestimonial1 = document.getElementById("avt-testimonial-1");
inputTestimonial1.addEventListener("change", (e) => {
	if (e.target.files.length) {
		const testimonialFormData = new FormData();
		testimonialFormData.append("file", e.target.files[0]);
		testimonialFormData.append("section", "testimonial");
		testimonialFormData.append("acc", acc);
		// CALL API GET SRC IMG
		$.ajax({
			data: testimonialFormData,
			method: "POST",
			url: "/iUploadImg",
			dataType: 'json',
			contentType: false,
			processData: false,
			headers: { Authorization: 'Bearer ' + token },
		})
			.done(function (res) {
				imgTestimonial1.src = res;
			})
			.fail(function (jqXHR, textStatus, errorThrown) {
				console.log("fail");
			});
	}
	$("#avt-testimonial-1-edit").hide();
	$("#avt-testimonial-1").removeClass("d-none");
});
$("#avt-testimonial-1").click(function () {
	if (bool) {
		$(this).toggleClass("d-none");
		$("#avt-testimonial-1-edit").css("display", "flex");
	}
});

// CẢM NGHĨ 1
let testimonial1;
$("#testimonial-text-1").click(function () {
	if (bool) {
		$(this).toggleClass("d-none");
		$("#testimonial-text-1-edit").css("display", "flex");
	}
});
document
	.getElementById("testimonial-text-1-input")
	.addEventListener("input", (e) => {
		testimonial1 = e.target.value;
	});
$("#testimonial-text-1-save").click(function () {
	$("#testimonial-text-1-edit").hide();
	$("#testimonial-text-1").removeClass("d-none");
	$("#testimonial-text-1").html(testimonial1);
});

// TÊN NGƯỜI PHÁT BIỂU 1
let testimonialname1;
$("#testimonial-name-1").click(function () {
	if (bool) {
		$(this).toggleClass("d-none");
		$("#testimonial-name-1-edit").css("display", "flex");
	}
});
document
	.getElementById("testimonial-name-1-input")
	.addEventListener("input", (e) => {
		testimonialname1 = e.target.value;
	});
$("#testimonial-name-1-save").click(function () {
	$("#testimonial-name-1-edit").hide();
	$("#testimonial-name-1").removeClass("d-none");
	$("#testimonial-name-1").html(testimonialname1);
});

// CHỨC DANH NGƯỜI PHÁT BIỂU 1
let testimonialpos1;
$("#testimonial-pos-1").click(function () {
	if (bool) {
		$(this).toggleClass("d-none");
		$("#testimonial-pos-1-edit").css("display", "flex");
	}
});
document
	.getElementById("testimonial-pos-1-input")
	.addEventListener("input", (e) => {
		testimonialpos1 = e.target.value;
	});
$("#testimonial-pos-1-save").click(function () {
	$("#testimonial-pos-1-edit").hide();
	$("#testimonial-pos-1").removeClass("d-none");
	$("#testimonial-pos-1").html(testimonialpos1);
});

// REGISTRATION HEADING
let regheading;
$("#reg-heading").click(function () {
	if (bool) {
		$(this).toggleClass("d-none");
		$("#reg-heading-edit").css("display", "flex");
	}
});
document.getElementById("reg-heading-input").addEventListener("input", (e) => {
	regheading = e.target.value;
});
$("#reg-heading-save").click(function () {
	$("#reg-heading-edit").hide();
	$("#reg-heading").removeClass("d-none");
	$("#reg-heading").html(regheading);
});

// QUESTION 1
let question1;
$("#question-1").click(function () {
	if (bool) {
		$(this).toggleClass("d-none");
		$("#question-1-edit").css("display", "flex");
	}
});
document.getElementById("question-1-input").addEventListener("input", (e) => {
	question1 = e.target.value;
});
$("#question-1-save").click(function () {
	$("#question-1-edit").hide();
	$("#question-1").removeClass("d-none");
	$("#question-1").html(question1);
});

// DIF 1 QUEST 1
let dif1;
$("#dif-1").click(function () {
	if (bool) {
		$(this).toggleClass("d-none");
		$("#dif-1-edit").css("display", "flex");
	}
});
document.getElementById("dif-1-input").addEventListener("input", (e) => {
	dif1 = e.target.value;
});
$("#dif-1-save").click(function () {
	$("#dif-1-edit").hide();
	$("#dif-1").removeClass("d-none");
	$("#dif-1").html(dif1);
});

// DIF 2 QUEST 1
let dif2;
$("#dif-2").click(function () {
	if (bool) {
		$(this).toggleClass("d-none");
		$("#dif-2-edit").css("display", "flex");
	}
});
document.getElementById("dif-2-input").addEventListener("input", (e) => {
	dif2 = e.target.value;
});
$("#dif-2-save").click(function () {
	$("#dif-2-edit").hide();
	$("#dif-2").removeClass("d-none");
	$("#dif-2").html(dif2);
});

// DIF 3 QUEST 1
let dif3;
$("#dif-3").click(function () {
	if (bool) {
		$(this).toggleClass("d-none");
		$("#dif-3-edit").css("display", "flex");
	}
});
document.getElementById("dif-3-input").addEventListener("input", (e) => {
	dif3 = e.target.value;
});
$("#dif-3-save").click(function () {
	$("#dif-3-edit").hide();
	$("#dif-3").removeClass("d-none");
	$("#dif-3").html(dif3);
});

// DIF 4 QUEST 1
let dif4;
$("#dif-4").click(function () {
	if (bool) {
		$(this).toggleClass("d-none");
		$("#dif-4-edit").css("display", "flex");
	}
});
document.getElementById("dif-4-input").addEventListener("input", (e) => {
	dif4 = e.target.value;
});
$("#dif-4-save").click(function () {
	$("#dif-4-edit").hide();
	$("#dif-4").removeClass("d-none");
	$("#dif-4").html(dif4);
});

// DIF 5 QUEST 1
let dif5;
$("#dif-5").click(function () {
	if (bool) {
		$(this).toggleClass("d-none");
		$("#dif-5-edit").css("display", "flex");
	}
});
document.getElementById("dif-5-input").addEventListener("input", (e) => {
	dif5 = e.target.value;
});
$("#dif-5-save").click(function () {
	$("#dif-5-edit").hide();
	$("#dif-5").removeClass("d-none");
	$("#dif-5").html(dif5);
});

// QUY MO CAU HOI
let scale;
$("#scale-quest").click(function () {
	if (bool) {
		$(this).toggleClass("d-none");
		$("#scale-quest-edit").css("display", "flex");
	}
});
document.getElementById("scale-quest-input").addEventListener("input", (e) => {
	scale = e.target.value;
});
$("#scale-quest-save").click(function () {
	$("#scale-quest-edit").hide();
	$("#scale-quest").removeClass("d-none");
	$("#scale-quest").html(scale);
});

// QUY MO DAP AN 1
let scaleans1;
$("#scale-ans-1").click(function () {
	if (bool) {
		$(this).toggleClass("d-none");
		$("#scale-ans-1-edit").css("display", "flex");
	}
});
document.getElementById("scale-ans-1-input").addEventListener("input", (e) => {
	scaleans1 = e.target.value;
});
$("#scale-ans-1-save").click(function () {
	$("#scale-ans-1-edit").hide();
	$("#scale-ans-1").removeClass("d-none");
	$("#scale-ans-1").html(scaleans1);
});

// QUY MO DAP AN 2
let scaleans2;
$("#scale-ans-2").click(function () {
	if (bool) {
		$(this).toggleClass("d-none");
		$("#scale-ans-2-edit").css("display", "flex");
	}
});
document.getElementById("scale-ans-2-input").addEventListener("input", (e) => {
	scaleans2 = e.target.value;
});
$("#scale-ans-2-save").click(function () {
	$("#scale-ans-2-edit").hide();
	$("#scale-ans-2").removeClass("d-none");
	$("#scale-ans-2").html(scaleans2);
});

// QUY MO DAP AN 3
let scaleans3;
$("#scale-ans-3").click(function () {
	if (bool) {
		$(this).toggleClass("d-none");
		$("#scale-ans-3-edit").css("display", "flex");
	}
});
document.getElementById("scale-ans-3-input").addEventListener("input", (e) => {
	scaleans3 = e.target.value;
});
$("#scale-ans-3-save").click(function () {
	$("#scale-ans-3-edit").hide();
	$("#scale-ans-3").removeClass("d-none");
	$("#scale-ans-3").html(scaleans3);
});

// TEXT AREA QUEST
let textareaquest;
$("#textarea-quest").click(function () {
	if (bool) {
		$(this).toggleClass("d-none");
		$("#textarea-quest-edit").css("display", "flex");
	}
});
document
	.getElementById("textarea-quest-input")
	.addEventListener("input", (e) => {
		textareaquest = e.target.value;
	});
$("#textarea-quest-save").click(function () {
	$("#textarea-quest-edit").hide();
	$("#textarea-quest").removeClass("d-none");
	$("#textarea-quest").html(textareaquest);
});

// TIÊU ĐỀ GIẢI PHÁP DỊCH VỤ
let benefitheading;
$("#benefit-text").click(function () {
	if (bool) {
		$(this).toggleClass("d-none");
		$("#benefit-text-edit").css("display", "flex");
	}
});
document.getElementById("benefit-text-input").addEventListener("input", (e) => {
	benefitheading = e.target.value;
});
$("#benefit-text-save").click(function () {
	$("#benefit-text-edit").hide();
	$("#benefit-text").removeClass("d-none");
	$("#benefit-text").html(benefitheading);
});

// GIẢI PHÁP 1
let sol1;
$("#sol-1").click(function () {
	if (bool) {
		$(this).toggleClass("d-none");
		$("#sol-1-edit").css("display", "flex");
	}
});
document.getElementById("sol-1-input").addEventListener("input", (e) => {
	sol1 = e.target.value;
});
$("#sol-1-save").click(function () {
	$("#sol-1-edit").hide();
	$("#sol-1").removeClass("d-none");
	$("#sol-1").html(sol1);
});

// GIẢI PHÁP 2
let sol2;
$("#sol-2").click(function () {
	if (bool) {
		$(this).toggleClass("d-none");
		$("#sol-2-edit").css("display", "flex");
	}
});
document.getElementById("sol-2-input").addEventListener("input", (e) => {
	sol2 = e.target.value;
});
$("#sol-2-save").click(function () {
	$("#sol-2-edit").hide();
	$("#sol-2").removeClass("d-none");
	$("#sol-2").html(sol2);
});

// GIẢI PHÁP 3
let sol3;
$("#sol-3").click(function () {
	if (bool) {
		$(this).toggleClass("d-none");
		$("#sol-3-edit").css("display", "flex");
	}
});
document.getElementById("sol-3-input").addEventListener("input", (e) => {
	sol3 = e.target.value;
});
$("#sol-3-save").click(function () {
	$("#sol-3-edit").hide();
	$("#sol-3").removeClass("d-none");
	$("#sol-3").html(sol3);
});

// GIẢI PHÁP 4
let sol4;
$("#sol-4").click(function () {
	if (bool) {
		$(this).toggleClass("d-none");
		$("#sol-4-edit").css("display", "flex");
	}
});
document.getElementById("sol-4-input").addEventListener("input", (e) => {
	sol4 = e.target.value;
});
$("#sol-4-save").click(function () {
	$("#sol-4-edit").hide();
	$("#sol-4").removeClass("d-none");
	$("#sol-4").html(sol4);
});

// GIẢI PHÁP 5
let sol5;
$("#sol-5").click(function () {
	if (bool) {
		$(this).toggleClass("d-none");
		$("#sol-5-edit").css("display", "flex");
	}
});
document.getElementById("sol-5-input").addEventListener("input", (e) => {
	sol5 = e.target.value;
});
$("#sol-5-save").click(function () {
	$("#sol-5-edit").hide();
	$("#sol-5").removeClass("d-none");
	$("#sol-5").html(sol5);
});

// TIÊU ĐỀ PHẦN ẢNH TƯ LIỆU
let imgdocs;
$("#imgs-title").click(function () {
	if (bool) {
		$(this).toggleClass("d-none");
		$("#imgs-title-edit").css("display", "flex");
	}
});
document.getElementById("imgs-title-input").addEventListener("input", (e) => {
	imgdocs = e.target.value;
});
$("#imgs-title-save").click(function () {
	$("#imgs-title-edit").hide();
	$("#imgs-title").removeClass("d-none");
	$("#imgs-title").html(imgdocs);
});

// TIÊU ĐỀ PHẦN ẢNH TƯ LIỆU
let contactinfo;
$("#contact_info").click(function () {
	if (bool) {
		$(this).toggleClass("d-none");
		$("#contact_info-edit").css("display", "flex");
	}
});
document.getElementById("contact_info-input").addEventListener("input", (e) => {
	contactinfo = e.target.value;
});
$("#contact_info-save").click(function () {
	$("#contact_info-edit").hide();
	$("#contact_info").removeClass("d-none");
	$("#contact_info").html(contactinfo);
});

// ĐỊA CHỈ
let localeinfo;
$("#info-locale").click(function () {
	if (bool) {
		$(this).toggleClass("d-none");
		$("#info-locale-edit").css("display", "flex");
	}
});
document.getElementById("info-locale-input").addEventListener("input", (e) => {
	localeinfo = e.target.value;
});
$("#info-locale-save").click(function () {
	$("#info-locale-edit").hide();
	$("#info-locale").removeClass("d-none");
	$("#info-locale").html(localeinfo);
});

// EMAIL
let emailinfo;
$("#info-email").click(function () {
	if (bool) {
		$(this).toggleClass("d-none");
		$("#info-email-edit").css("display", "flex");
	}
});
document.getElementById("info-email-input").addEventListener("input", (e) => {
	emailinfo = e.target.value;
});
$("#info-email-save").click(function () {
	$("#info-email-edit").hide();
	$("#info-email").removeClass("d-none");
	$("#info-email").html(emailinfo);
});

// PHONENUMBER
let telinfo;
$("#info-tel").click(function () {
	if (bool) {
		$(this).toggleClass("d-none");
		$("#info-tel-edit").css("display", "flex");
	}
});
document.getElementById("info-tel-input").addEventListener("input", (e) => {
	telinfo = e.target.value;
});
$("#info-tel-save").click(function () {
	$("#info-tel-edit").hide();
	$("#info-tel").removeClass("d-none");
	$("#info-tel").html(telinfo);
});

// CHECKBOX ẨN HIỆN SECTION
$(".checkbox-content").on("click", function () {
	let currentId = $(this).attr("id").slice(0, -6);
	if ($(this).is(":checked")) {
		$(`#${currentId}`).hide();
	} else {
		$(`#${currentId}`).show();
	}
});

$("#business-logo").click(function () {
	if (bool) {
		$(this).toggleClass("d-none");
		$("#business-logo-edit").css("display", "flex");
	}
});
// LINK WEBSITE
let linkbl;
$("#link-bl").click(function () {
	if (bool) {
		$(this).toggleClass("d-none");
		$("#link-bl-edit").css("display", "flex");
	} else {
		$("#link-bl-edit").css("display", "none");
	}
});
document.getElementById("link-bl-input").addEventListener("input", (e) => {
	linkbl = e.target.value;
	document.getElementById("bl-link").href = linkbl;
});
$("#link-bl-save").click(function () {
	$("#link-bl-edit").hide();
	$("#link-bl").removeClass("d-none");
	$("#link-bl").html(linkbl);
});

// LOGO PERSON
const inputperlogo = document.getElementById("personal-logo-input");
const imageperlogo = document.getElementById("personal-logo");
inputperlogo.addEventListener("change", (e) => {
	if (e.target.files.length) {
		
	}
	else {
		return
	}
	
	const testimotionalFormData = new FormData();
	testimotionalFormData.append("file", e.target.files[0]);
	testimotionalFormData.append("section", "testimotional");
	testimotionalFormData.append("acc", acc);
	$.ajax({
		data: testimotionalFormData,
		method: "POST",
		url: "/iUploadImg",
		dataType: 'json',
		contentType: false,
		processData: false,
		headers: { Authorization: 'Bearer ' + token },
	})
		.done(function (res) {
			imageperlogo.src = res
		})
		.fail(function (jqXHR, textStatus, errorThrown) {
			console.log(jqXHR);
		});

	$("#personal-logo").removeClass("d-none");
	$("#personal-logo-edit").hide();
});
$("#personal-logo").click(function () {
	if (bool) {
		$(this).toggleClass("d-none");
		$("#personal-logo-edit").css("display", "flex");
	}
});

// LƯU TẤT CẢ THAY ĐỔI + GỬI DATA
$("#save-change").on("click", function () {
	var checkboxes = document.querySelectorAll('.checkbox-content');
	let htmlString = []; 
	checkboxes.forEach(function (checkbox) {
		let data = {
			name: checkbox.value,
			html: document.getElementById(`${checkbox.value}`).outerHTML,
			show: !checkbox.checked
		}
		htmlString.push(data)
	});
	const data = {
		htmlString: htmlString,
		acc: acc,
	};
	$('#save-change').prop('disabled', true)
	$('#saveNoti').text('')
	$.ajax({
		method: "post",
		url: "/iupdatehtml",
		data,
		headers: { authorization: 'bearer ' + token },
	})
		.done(function (rs) {
			console.log(rs);
			$('#saveNoti').removeClass('error-noti')
			$('#saveNoti').addClass('success-noti')
			$('#saveNoti').text(`${rs} lưu thay đổi thành công.`)
			$('#save-change').prop('disabled', false)
		})
		.fail(function (jqxhr, textstatus, errorthrown) {
			console.log(jqxhr);
			$('#saveNoti').removeClass('success-noti')
			$('#saveNoti').addClass('error-noti')
			$('#saveNoti').text('lưu thay đổi thất bại.')
			settimeout(function () {
				$('#saveNoti').text('')
				$('#save-change').prop('disabled', false)
			}, 3000)
		});
});

// LƯU ẢNH PHẦN HOME -> LOGO BUSINESS
const inputLogo = document.getElementById("business-logo-input");
const imageLogo = document.getElementById("business-logo");
inputLogo.addEventListener("change", (e) => {
	if (e.target.files.length) {
	
	}
	else {
		return
	}
	$("#business-logo").removeClass("d-none");
	$("#business-logo-edit").hide();

	const homeFormData = new FormData();
	homeFormData.append("file", e.target.files[0]);
	homeFormData.append("section", "home");
	homeFormData.append("acc", acc);
	$.ajax({
		data: homeFormData,
		method: "POST",
		url: "/iUploadImg",
		dataType: 'json',
		contentType: false,
		processData: false,
		headers: { Authorization: 'Bearer ' + token },
	})
		.done(function (res) {
			imageLogo.src = res
		})
		.fail(function (jqXHR, textStatus, errorThrown) {
			console.log(jqXHR);
		});
});

for (let img of $(".speaker-avt")) {
	img.addEventListener("click", function (e) {
		if (bool) {
			const id = e.target.id.charAt(12);
			$(`#avt-speaker-${id}`).toggleClass("d-none");
			$(`#avt-speaker-${id}-edit`).css("display", "flex");
		}
	});
}

for (let input of $(".speaker-avt-input")) {
	const avtFormData = new FormData();
	input.addEventListener("change", function (e) {
		// lấy ID ảnh
		let id = e.target.id.charAt(12);
		if (e.target.files.length) {

		}
		else {
			return
		}
		// FORM DATA GỬI API
		avtFormData.append("file", e.target.files[0]);
		avtFormData.append("section", "schedule");
		avtFormData.append("acc", acc);
		// CALL API GET SRC ẢNH -> CẬP NHẬT SRC
		$.ajax({
			method: "POST",
			url: "/iUploadImg",
			data: avtFormData,
			dataType: 'json',
			contentType: false,
			processData: false,
			headers: { Authorization: 'Bearer ' + token },
		})
			.done(function (res) {
				document.getElementById(`avt-speaker-${id}`).src = res;
			})
			.fail(function (jqXHR, textStatus, errorThrown) {
				console.log("fail");
			});

		for (var pair of avtFormData.entries()) {
			console.log(pair[0] + ", " + pair[1]);
		}
		// ẨN INPUT FILE HIỆN AVATAR
		$(`#avt-speaker-${id}`).removeClass("d-none");
		$(`#avt-speaker-${id}-edit`).hide();
	});
}

// CAP NHAT ANH PHẦN PARTNER
for (let img of $(".partner-avt")) {
	img.addEventListener("click", function (e) {
		if (bool) {
			const id = e.target.id.charAt(12);
			$(`#avt-partner-${id}`).toggleClass("d-none");
			$(`#avt-partner-${id}-edit`).css("display", "flex");
		}
	});
}

for (let input of $(".partner-avt-input")) {
	const avtFormData = new FormData();
	input.addEventListener("change", function (e) {
		// lấy ID ảnh
		let id = e.target.id.charAt(12);
		if (e.target.files.length) {
			
		}
		else {
			return
		}
		// FORM DATA GỬI API
		avtFormData.append("file", e.target.files[0]);
		avtFormData.append("section", "speaker");
		avtFormData.append("acc", acc);
		// CALL API GET SRC ẢNH -> CẬP NHẬT SRC
		$.ajax({
			data: avtFormData,
			method: "POST",
			url: "/iUploadImg",
			dataType: 'json',
			contentType: false,
			processData: false,
			headers: { Authorization: 'Bearer ' + token },
		})
			.done(function (res) {
				document.getElementById(`avt-partner-${id}`).src = res;
			})
			.fail(function (jqXHR, textStatus, errorThrown) {
				console.log(jqXHR);
			});

		// ẨN INPUT FILE HIỆN AVATAR
		$(`#avt-partner-${id}`).removeClass("d-none");
		$(`#avt-partner-${id}-edit`).hide();
	});
}

// CẬP NHẬT ẢNH CỘNG ĐỒNG
for (let img of $(".community-img")) {
	img.addEventListener("click", function (e) {
		if (bool) {
			const id = e.target.id.charAt(9);
			$(`#img-data-${id}`).toggleClass("d-none");
			$(`#img-data-${id}-edit`).css("display", "flex");
		}
	});
}

for (let input of $(".img-data-input")) {
	const imgFormData = new FormData();
	input.addEventListener("change", function (e) {
		// lấy ID ảnh
		let id = e.target.id.charAt(9);
		if (e.target.files.length) {

		}
		else {
			return
		}
		// FORM DATA GỬI API
		imgFormData.append("file", e.target.files[0]);
		imgFormData.append("section", "faq");
		imgFormData.append("acc", acc);

		for (var pair of imgFormData.entries()) {
			console.log(pair[0] + ", " + pair[1]);
		}
		// CALL API GET SRC ẢNH -> CẬP NHẬT SRC
		$.ajax({
			method: "POST",
			url: "/iUploadImg",
			data: imgFormData,
			dataType: 'json',
			contentType: false,
			processData: false,
			headers: { Authorization: 'Bearer ' + token },
		})
			.done(function (res) {
				document.getElementById(`img-data-${id}`).src = res;
			})
			.fail(function (jqXHR, textStatus, errorThrown) {
				console.log(jqXHR);
			});

		// ẨN INPUT FILE HIỆN AVATAR
		$(`#img-data-${id}`).removeClass("d-none");
	});
}



// XU LI MODAL DANG NHAP
let modal = document.querySelector(".login");
let trigger = document.querySelector("#invite-heading");
let closeButton = document.querySelector(".close-button");
let inputLogin = document.querySelector("#input-login");

function toggleModal() {
	modal.classList.toggle("show-modal");
}

function windowOnClick(event) {
	if (event.target === modal) {
		toggleModal();
	}
}
$(".login-button").on("click", function (e) {
	let secretPhrase = inputLogin.value;
	let data = {
		acc: acc,
		secret: secretPhrase,
	};
	$.ajax({
		method: "POST",
		url: "/iLogin",
		data,
	})
		.done(function (res) {
			token = res.token;
			bool = res.data;
			isShowButtonHide();
			closeButton.click();
		})
		.fail(function (jqXHR, textStatus, errorThrown) {
			console.log('login', jqXHR);
		});
});
trigger.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);

// HÀM XỬ LÍ Hiện link ytb
for (let item of $('.single_schedule')) {
	item.addEventListener('click', function () {
		var parent = $(this).parent()
		var video = parent.find('video');
		var videoSrc = video.find('source').attr('src');
		if (videoSrc != '') {
			parent.toggleClass('show_link')
		}
	})
}

// HÀM XỬ LÍ POPUP VIDEO
// HÀM XỬ LÍ OPEN POPUP
for (let item of $('.speaker-avt')) {
	item.addEventListener('click', function () {
		var parent = $(this).parent().parent().parent();
		var video = parent.find('video');
		var videoSrc = video.find('source').attr('src');
		if (videoSrc != '') {
			parent.addClass('show-popup')
		}
	})
}
// HÀM XỬ LÍ CLOSE POPUP
for (let item of $('.close-popup')) {
	item.addEventListener('click', function () {
		$(this).parent().parent().parent().removeClass('show-popup')
	})
}

// ẨN NHỮNG VIDEO KO CÓ SRC
$('video source[src=""]').each(function () {
	$(this).parent().parent().parent().hide();
})


// HÀM XỬ LÍ UPLOAD VIDEO / LINK YTB
let vidLink
let vid
$('.schedule_link').each(function () {
	if (bool) {
		$(this).click(function () {
			$(this).next().css('display', 'flex')
			$(this).css('opacity', '0')
		})
	}
})
// link
$('.upd-ytb').on('input', function (e) {
	vidLink = e.target.value
})



$('#submit_reg').click(function () {
	let dataObj = {
		connector: acc,
	}

	let inputs = $('.personal-infor');
	inputs.each(function () {
		let value = $(this).val();
		let currentKey = this.getAttribute('id')
		dataObj[currentKey] = value;
	});

	let originalSelect = {};
	let checkboxes = $('#reg_form input[type="checkbox"]');
	checkboxes.each(function () {
		let name = this.name;
		let value = this.value;
		if (this.checked) {
			if (!originalSelect[name]) {
				originalSelect[name] = [];
			}
			originalSelect[name].push(value);
		} else {
			if (!originalSelect[name]) {
				originalSelect[name] = [];
			}
		}
	});

	let radios = $("#reg_form input[type='radio']");
	radios.each(function () {
		let name = this.name;
		let value = this.value;
		if (this.checked) {
			originalSelect[name] = value;
		} else {
			if (!originalSelect[name]) {
				let rad = $(`#reg_form input[type="radio"][name="${name}"]`);
				if (rad.length > 0) {
					originalSelect[name] = rad.first().val();
				}
			}
		}
	});

	let originalNote = {};
	let textareas = $("#reg_form textarea");
	textareas.each(function () {
		let value = $(this).val();
		let currentKey = this.getAttribute('name')
		originalNote[currentKey] = value;
	});
	let convertedNote = {
		note: {}
	};
	for (let key in originalNote) {
		convertedNote.note[key] = originalNote[key];
	}
	dataObj['note'] = JSON.stringify(convertedNote.note);
	dataObj['jsonString'] = JSON.stringify(originalSelect);

	$('#noti_register').text('');
	if (dataObj['name'] == '' || dataObj['email'] == '' || dataObj['tel'] == '') {
		$('#noti_register').text('Vui lòng nhập đầy đủ thông tin')
		return
	}

	$.ajax({
		method: "POST",
		url: '/iBusinessRegister',
		data: dataObj,
	})
		.done(function (msg) {
			inputs.each(function () {
				$(this).val('');
			});
			textareas.each(function () {
				$(this).val('');
			});
			$('#noti_register').text(msg)
		})
		.fail(function (jqXHR, textStatus, errorThrown) {
			console.log(jqXHR);
			$('#noti_register').text(jqXHR.responseJSON)
		});
})

$('.single-schedule').each(item => {
    item.click(function(e) {
        e.next().css('display','flex');
    })
})

// $(document).on('click','.edit-icon',function(e) {
//     $(this).prev().css('display','flex')
// })
$('.edit-icon').each(function(id) {
    $(this).on('click',function(e) {
        $(this).parent().prev().toggleClass('show-edit_video')
        console.log($(this));
    })
})

$('.close-link').each(function(id) {
    $(this).click(function () {
        let updLink = $(this).prev().val()
        
        $.ajax({
            method: "POST",
            url: 'cap nhat link ytb',
            data: {updLink},
        })
            .done(function (msg) {
                $(this).parent().parent().parent().removeClass('show-edit_video')
                $(this).parent().parent().parent().prev().children('a')[0].setAttribute('href', vidLink)
                $(this).parent().parent().parent().prev().css('opacity', 1)
            })
            .fail(function (jqXHR, textStatus, errorThrown) {
                console.log(jqXHR);
                $('#noti_register').text(jqXHR.responseJSON)
            });
    })
})


// vid
$('.upd-video').each(function () {
	$(this).on('change', function (e) {
        // let newVideo = $(this).val()
        $(this).parent().parent().removeClass('show-edit_video')
        // $(this).parent().parent().parent().next().children().eq(0).children().eq(1).attr('src',newVideo)
        $(this).parent().parent().prev().css('opacity', 1)
		vid = e.target.files[0]
		if (e.target.files[0].length > 0) {
			let vidFormData = new FormData()
			vidFormData.append('file', vid)
			vidFormData.append("section", "schedule");
			vidFormData.append(acc)
			vidFormData.append("isVideo", true);
			$.ajax({
				method: "POST",
				url: "/iUploadImg",
				data: vidFormData,
				processData: false,
				headers: {
					'Authorization':
						`Bearer ${token}`,
				},
			})
				.done(function (msg) {
					console.log("msg", msg);
					// imageLogo.src = msg.link
				})
				.fail(function (jqXHR, textStatus, errorThrown) {
					console.log("fail");
				});
		}
	})
})


// SAU KHI ĐĂNG NHẬP NHẬN ĐƯỢC 1 BOOLEAN
function isShowButtonHide() {
	if (!bool) {
		for (item of $(".checkbox-container")) {
			item.style.display = "none";
		}
        for (item of $('.edit_video--icon')) {
            item.style.display = "none";
        }
		$("#save-change").css("display", "none");
		$("#link-bl-edit").css("display", "none");
	} else {
		for (item of $(".checkbox-container")) {
			item.style.display = "flex";
		}
        for (item of $('.edit_video--icon')) {
            item.style.display = "flex";
        }
		$("#save-change").css("display", "block");
		$("#link-bl-edit").css("display", "flex	");
	}
}
isShowButtonHide();

$('.single_schedule').each(function(id){
    $(this).click(function(){
        console.log($(this).children().eq(2));
        $(this).children().eq(2).css('opacity','1')
    })
})