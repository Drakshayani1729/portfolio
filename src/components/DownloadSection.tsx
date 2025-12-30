import React from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { Document, Packer, Paragraph } from "docx";
import { saveAs } from "file-saver";

const DownloadSection: React.FC = () => {

  // Download as PDF
  const downloadPDF = async () => {
    const element = document.getElementById("content");
    if (!element) return;

    const canvas = await html2canvas(element);
    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF("p", "mm", "a4");
    const width = pdf.internal.pageSize.getWidth();
    const height = (canvas.height * width) / canvas.width;

    pdf.addImage(imgData, "PNG", 0, 0, width, height);
    pdf.save("project.pdf");
  };

  // Download as Image
  const downloadImage = async () => {
    const element = document.getElementById("content");
    if (!element) return;

    const canvas = await html2canvas(element);
    const link = document.createElement("a");
    link.download = "project.jpg";
    link.href = canvas.toDataURL("image/jpeg");
    link.click();
  };

  // Download as DOCX
  const downloadDocx = async () => {
    const doc = new Document({
      sections: [
        {
          children: [
            new Paragraph("Project Report"),
            new Paragraph("Generated from my deployed portfolio website."),
          ],
        },
      ],
    });

    const blob = await Packer.toBlob(doc);
    saveAs(blob, "project.docx");
  };

  return (
    <div style={{ marginTop: "20px" }}>
      <button onClick={downloadPDF}>Download PDF</button>
      <button onClick={downloadImage}>Download Image</button>
      <button onClick={downloadDocx}>Download DOCX</button>
    </div>
  );
};

export default DownloadSection;
