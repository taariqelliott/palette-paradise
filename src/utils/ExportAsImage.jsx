import html2canvas from "html2canvas";

const ExportAsImage = async (element, imageFileName) => {
    const html = document.getElementsByTagName("html")[0];
    const body = document.getElementsByTagName("body")[0];
    let htmlWidth = html.clientWidth;
    let bodyWidth = body.clientWidth;

    const newWidth = element.scrollWidth - element.clientWidth;

    if (newWidth > element.clientWidth) {
        htmlWidth += newWidth;
        bodyWidth += newWidth;
    }

    html.style.width = htmlWidth + "px";
    body.style.width = bodyWidth + "px";

    const canvas = await html2canvas(element);
    const image = canvas.toDataURL("image/png", 1.0);
    downloadImage(image, imageFileName);
    html.style.width = null;
    body.style.width = null;
};

const downloadImage = (blob, fileName) => {
    const pictureLink = window.document.createElement("a");
    pictureLink.style = "display:none;";
    pictureLink.download = fileName;

    pictureLink.href = blob;

    document.body.appendChild(pictureLink);
    pictureLink.click();
    document.body.removeChild(pictureLink);

    pictureLink.remove();
};

export default ExportAsImage;
