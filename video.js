(() => {
  immediatelyTrigger();
})();

function immediatelyTrigger() {
  setTimeout(() => {
    const getIframe = document.getElementById("video-layout");
    console.log("getIframe", getIframe);
    const getIframeId = getIframe.getElementsByTagName("iframe");
    console.log("getIframeId", getIframeId.item(0));
    console.log("getIframeId", getIframeId.item(0).contentWindow.document);
  }, 10000);
}

//  console.log("getDocumentHtml", getDocumentHtml);

//  console.log("getIframeId", getIframeId);

//   const getId = document.getElementById("video-tag-id");
//   console.log("getId", getId);
//   getId.play();
//   getId.onplay();

//   var iframe = document.querySelector("video-layout");

//   var iframe = document.getElementById("iframe-id");

//   console.log("iframe", iframe);

// console.log("getIframeId", getIframeId.length);

//   const getDocumentHtml = getIframeId.getElementsByTagName("html");

//   const getVideoId = document.getElementsByTagName("iframe");
