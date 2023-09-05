import { useState } from "react";
import Button from "../../atoms/button/button";
import Container from "../../atoms/container/container";
import CopyIcon from "../../atoms/icons/copy";
import Snackbar from "../../atoms/snackbar/snackbar";

const Title = (e: string) =>
  `<br/><span style="color:#444444;font-size:13px;line-height: 1.5;font-family:tahoma, sans-serif"><i>${e}</i></span>`;
const Phone = (e: string) =>
  `<br/><span style="color:#444444;font-size:13px;line-height: 1.5;font-family:tahoma, sans-serif">${e}</span>`;

const Result = ({
  name,
  title,
  phone,
}: {
  name: string;
  title: string;
  phone: string;
}) => {
  return `<table width="320" cellspacing="0" cellpadding="0" border="0">
<tr>
  <td style="vertical-align: top; text-align:left;color:#444444;font-size:13px;line-height: 1.5;font-family:tahoma,sans-serif; text-align:left">
      <span style="color:#000000;font-size:13px;line-height: 1.5;font-family:'arial black',tahoma, sans-serif;text-transform: uppercase;">
        ${name}
      </span>
      <br/>
      ${typeof title !== "undefined" ? Title(title) : ""}
  </td>
</tr>
<tr>
  <td style="vertical-align: top; text-align:left;color:#444444;font-size:13px;font-family:tahoma,sans-serif; text-align:left">
    <img width="200" height="93" src="https://www.greenberry.nl/email-animation.gif" alt="Greenberry" style="border:none;" />
  </td>
</tr>
<tr>
  <td style="vertical-align: top; text-align:left;color:#444444;font-size:13px;line-height: 1.5;font-family:tahoma,sans-serif; text-align:left">
    <span style="color:#444444;font-size:13px;line-height: 1.5;font-family:tahoma, sans-serif">Maliebaan 11</span>
    <br/>
    <span style="color:#444444;font-size:13px;line-height: 1.5;font-family:tahoma, sans-serif">3581 CA Utrecht</span>
    <br/>
    <span style="color:#444444;font-size:13px;line-height: 1.5;font-family:tahoma, sans-serif">+31302737424</span>
    ${typeof phone !== "undefined" ? Phone(phone) : ""}
    <br/>
    <a href="https://www.greenberry.nl" style="font-size:13px;line-height: 1.5;font-family:tahoma, sans-serif">www.greenberry.nl</a>
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
  const html = Result({ name, title, phone });

  const handleCopyHtml = () => {
    navigator.clipboard.writeText(html);
    setCopiedHtml(true);
    setTimeout(() => {
      setCopiedHtml(false);
    }, 3000);
  };
  return (
    <Container display="flex" flexDirection="row">
      <Container
        margin="3rem"
        padding="2rem"
        backgroundColor="#fff"
        position="relative"
      >
        <div dangerouslySetInnerHTML={{ __html: html }} />
        <Container position="absolute" top="5px" right="5px">
          <Button isIcon={true} onClick={handleCopyHtml} title="Copy html">
            <CopyIcon />
          </Button>
        </Container>
      </Container>
      {copiedHtml && <Snackbar label="Copied html" />}
    </Container>
  );
}
