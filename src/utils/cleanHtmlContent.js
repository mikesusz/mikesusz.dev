import sanitizeHtml from 'sanitize-html';

export function cleanHtmlContent(html) {
  // Remove HTML comments
	let cleaned = html.replace(/<!--[\s\S]*?-->/g, '');

	cleaned = cleaned.replace(/&gt;!--[\s\S]*?--&lt;/g, '');

  // Add a line break and bold label before each footnote definition at the start of a line
  cleaned = cleaned.replace(/^\[\^([^\]]+)\]:/gm, '<br /><strong>[$1]</strong>:');

  // Replace inline footnote references [^label] with a superscript
  cleaned = cleaned.replace(/\[\^([^\]]+)\]/g, '<sup class="footnote-ref">[$1]</sup>');


	cleaned = sanitizeHtml(cleaned, {
		allowedTags: sanitizeHtml.defaults.allowedTags.concat(['img'])
	});
	return cleaned;
}