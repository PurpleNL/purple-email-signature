import { useState } from "react";
import Button from "../../atoms/button/button";
import Container from "../../atoms/container/container";
import CopyIcon from "../../atoms/icons/copy";
import Snackbar from "../../atoms/snackbar/snackbar";
import Tooltip from "../../atoms/tooltip/tooltip";

const signatureImage = `https://purple-generic.s3.eu-central-1.amazonaws.com/signature/email-sig-img.png`

const Result = ({
  name,
  title,
  phone,
  email,
}: {
  name: string;
  title: string;
  phone: string;
  email: string;
}) => {
  return `<table id="result" style="font:90% Tahoma;font-size:initial;color:#000000;text-align: left;">
  <tr>
      <td style="vertical-align:top;padding:0 8px 5px 0"><a href="https://www.purplestorytelling.com/"
              target="_blank"><img src="${signatureImage}" style="display:block" width="230"
                  alt="photo-logo" /></a></td>
      <td style="vertical-align:top;color:#979797;font:90% Tahoma;border-left:3px solid #979797;padding:0 0 5px 8px">
          <div style="color:#040404;font-size:1.3em">
          ${name}</div><span
              style="color:#000000;font-size:.9em">${title}</span>
          <div style="font-size:10px;line-height:10px">&nbsp;</div>
          <div style="white-space:nowrap !important"><span style="color:#979797;font-size:.9em">Phone
              </span><a href="tel:${phone}"
                  style="color:#000000;font-size:.9em;text-decoration:none">${phone}</a> </div>
          <div style="white-space:nowrap !important"><span style="color:#979797;font-size:.9em">EU Office
              </span><span style="color:#000000;font-size:.9em">Suikersilo-West 37, 1165MP Halfweg NL</span>
          </div>
          <div style="white-space:nowrap !important">
              <div><span style="color:#979797;font-size:.9em">US Office</span>&nbsp;<span
                      style="color:#000000;font-size:.9em;text-decoration:none">1213 West Morehead Street,
                      5th floor #120 Charlotte, NC 28208</span> </div>

          <div style="white-space:nowrap !important">
              <span style="color:#979797;font-size:.9em">Experience
                  Lab</span>&nbsp;<span style="color:#000000;font-size:.9em;text-decoration:none">Kalkovenplein
                  3a, 1165PE
                  Halfweg NL</span>
          </div>
          <div style="white-space:nowrap !important"><span style="color:#979797;font-size:.9em">Email
              </span><span><a href="mailto:${email}" target="_blank"
                      style="color:#000000;font-style:italic;font-size:.9em;text-decoration:none">${email}</a></span>
              <span style="color:#979797;font-size:.9em">Web </span><span><a
                      href="https://www.purplestorytelling.com" target="_blank"
                      style="color:#000000;font-size:.9em;text-decoration:none !important">purplestorytelling.com</a></span>
          </div>
          
          </div>
          <table>
              <tbody>
                  <tr>
                      <td><a style="vertical-align:top" href="https://www.linkedin.com/company/purple-digital-storytelling/"
                              target="_blank"><img style=""
                                  src="https://purple-generic.s3.eu-central-1.amazonaws.com/signature/linkedin.png" width="24"
                                  alt="linkedin"></a></td>
                      <td><a style="vertical-align:top" href="https://www.instagram.com/purple_digital_storytelling/"
                              target="_blank"><img style=""
                                  src="https://purple-generic.s3.eu-central-1.amazonaws.com/signature/instagram.png" width="24"
                                  alt="instagram"></a></td>
                      <td><a style="vertical-align:top" href="https://vimeo.com/purplestorytelling"
                              target="_blank"><img style=""
                                  src="https://purple-generic.s3.eu-central-1.amazonaws.com/signature/vimeo.png" width="24"
                                  alt="vimeo"></a></td>
                      <td><a style="vertical-align:top" href="https://www.youtube.com/@purpledigitalstorytelling"
                              target="_blank"><img style=""
                                  src="https://purple-generic.s3.eu-central-1.amazonaws.com/signature/youtube.png" width="24"
                                  alt="youtube"></a></td>
                  </tr>
              </tbody>
          </table>
      </td>
  </tr>
</table>`;
};

export default function SignatureResult({
  name,
  title,
  email,
  phone,
}: {
  name: string;
  title: string;
  email: string;
  phone: string;
}) {
  const [copiedHtml, setCopiedHtml] = useState(false);
  const html = Result({ name, title, phone, email });

  const handleClickRichText = () => {
    const richTextDiv = document.getElementById("result");

    if (!richTextDiv) {
      return;
    }
    const clipboardItem = new ClipboardItem({
      "text/html": new Blob([richTextDiv.outerHTML], { type: "text/html" }),
    });
    navigator.clipboard.write([clipboardItem]);
    setCopiedHtml(true);
    setTimeout(() => {
      setCopiedHtml(false);
    }, 3000);
  };

  return (
    <Container display="flex" flexDirection="column">
      <Container
        margin="3rem"
        padding="2rem"
        backgroundColor="#fff"
        position="relative"
      >
        <Container dangerouslySetInnerHTML={{ __html: html }} />
        <Container position="absolute" top="5px" right="5px">
          <Tooltip text="Copy signature">
            <Button isIcon={true} onClick={handleClickRichText}>
              <CopyIcon />
            </Button>
          </Tooltip>
        </Container>
      </Container>
      {copiedHtml && <Snackbar label="Copied!" />}
    </Container>
  );
}
