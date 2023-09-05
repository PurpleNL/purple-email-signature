import { useState } from "react";
import Button from "../../atoms/button/button";
import Container from "../../atoms/container/container";
import CopyIcon from "../../atoms/icons/copy";
import Snackbar from "../../atoms/snackbar/snackbar";
import Tooltip from "../../atoms/tooltip/tooltip";

const Title = (e: string) =>
  `<br/><span style="color:#444444;font-size:13px;line-height: 1.5;font-family:tahoma, sans-serif"><i>${e}</i></span>`;
const Phone = (e: string) =>
  `<br/><span style="color:#444444;font-size:13px;line-height: 1.5;font-family:tahoma, sans-serif">${e}</span>`;

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
  return `<table style="font:90% Tahoma;font-size:initial;color:#000000;text-align: left;">
  <tr>
      <td style="vertical-align:top;padding:0 8px 5px 0"><a href="https://img.newoldstamp.com/r/573687/p"
              target="_blank"><img src="https://img.newoldstamp.com/p/573687" style="display:block" width="250"
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
          <div style="white-space:nowrap !important"><span style="color:#979797;font-size:.9em">Email
              </span><span><a href="mailto:${email}" target="_blank"
                      style="color:#000000;font-style:italic;font-size:.9em;text-decoration:none">${email}</a></span>
              <span style="color:#979797;font-size:.9em">Web </span><span><a
                      href="https://www.purplestorytelling.com" target="_blank"
                      style="color:#000000;font-size:.9em;text-decoration:none !important">purplestorytelling.com</a></span>
          </div>
          <div style="white-space:nowrap !important">
              <div><span style="color:#979797;font-size:.9em">US Office</span>&nbsp;<span
                      style="color:#000000;font-size:.9em;text-decoration:none">1213 West Morehead Street,
                      5-120 Charlotte, NC 28208</span> </div>

          <div style="white-space:nowrap !important">
              <span style="color:#979797;font-size:.9em">Experience
                  Lab</span>&nbsp;<span style="color:#000000;font-size:.9em;text-decoration:none">Kalkovenplein
                  3a, 1165PE
                  Halfweg NL</span>
          </div>
          </div>
      </td>
  </tr>
</table>`;
};

export default function SignatureResult({
  name,
  title,
  email,
  phone,
  linkedin,
}: {
  name: string;
  title: string;
  email: string;
  phone: string;
  linkedin: string;
}) {
  const [copiedHtml, setCopiedHtml] = useState(false);
  const html = Result({ name, title, phone, email });

  const handleCopyHtml = () => {
    navigator.clipboard.writeText(html);
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
          <Tooltip text="Copy html">
            <Button isIcon={true} onClick={handleCopyHtml}>
              <CopyIcon />
            </Button>
          </Tooltip>
        </Container>
      </Container>
      {copiedHtml && <Snackbar label="Copied html" />}
    </Container>
  );
}
