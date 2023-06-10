function resumatorFormatSource(resumatorResultSource) {
  return encodeURIComponent(resumatorResultSource);
}

function resumatorApplyToggleszN4zIvSCi() {
  var resumatorApplyForm = document.getElementById(
    "resumator-applyform-szN4zIvSCi"
  );
  var resumatorApplyFrame = document.getElementById(
    "resumator-applyframe-szN4zIvSCi"
  );
  var resumatorApplyButton = document.getElementById(
    "resumator-applybutton-szN4zIvSCi"
  );
  //var resumatorForwardForm = document.getElementById("resumator-forwardform-szN4zIvSCi");
  //var resumatorForwardFrame = document.getElementById("resumator-forwardframe-szN4zIvSCi");
  //var resumatorForwardButton = document.getElementById("resumator-forwardbutton-szN4zIvSCi");

  //resumatorForwardForm.style.display = "none";
  //resumatorForwardButton.value = "Forward Position";
  if (resumatorApplyForm.style.display != "block") {
    resumatorApplyButton.value = "Cancel";
    resumatorApplyForm.style.display = "block";
    resumatorSource = "Our Career Page Widget";
    resumatorApplyFrame.src =
      "https://joskensolutions.applytojob.com/apply/embed/form/szN4zIvSCi?source=" +
      encodeURIComponent(resumatorSource);
  } else {
    resumatorApplyButton.value = "Apply Now";
    resumatorApplyForm.style.display = "none";
  }
  window.jQuery(resumatorApplyButton).trigger("change");
  //window.jQuery(resumatorForwardButton).trigger("change");
}

function resumatorForwardToggleszN4zIvSCi() {
  //var resumatorForwardForm = document.getElementById("resumator-forwardform-szN4zIvSCi");
  //var resumatorForwardFrame = document.getElementById("resumator-forwardframe-szN4zIvSCi");
  //var resumatorForwardButton = document.getElementById("resumator-forwardbutton-szN4zIvSCi");
  var resumatorApplyForm = document.getElementById(
    "resumator-applyform-szN4zIvSCi"
  );
  var resumatorApplyFrame = document.getElementById(
    "resumator-applyframe-szN4zIvSCi"
  );
  var resumatorApplyButton = document.getElementById(
    "resumator-applybutton-szN4zIvSCi"
  );
  resumatorApplyForm.style.display = "none";
  resumatorApplyButton.value = "Apply Now";
  //if( resumatorForwardForm.style.display != "block" ){
  //	resumatorForwardButton.value = "Cancel";
  //	resumatorForwardForm.style.display = "block";
  //	resumatorForwardFrame.src = "https://joskensolutions.applytojob.com/apply/embed/forward/szN4zIvSCi";
  //}else{
  //	resumatorForwardButton.value = "Forward Position";
  //	resumatorForwardForm.style.display = "none";
  //}
  window.jQuery(resumatorApplyButton).trigger("change");
  //window.jQuery(resumatorForwardButton).trigger("change");
}
