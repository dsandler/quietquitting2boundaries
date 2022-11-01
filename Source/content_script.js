walk(document.body);

function walk(node) 
{
	// I stole this function from here:
	// http://is.gd/mwZp7E
	
	var child, next;
	
	if (node.tagName.toLowerCase() == 'input' || node.tagName.toLowerCase() == 'textarea'
	    || node.classList.indexOf('ace_editor') > -1) {
		return;
	}

	switch ( node.nodeType )  
	{
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child ) 
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
			handleText(node);
			break;
	}
}

function handleText(textNode) 
{
	var v = textNode.nodeValue;

	v = v.replace(/\bQuiet Quitting\b/g, "__REPLACE_WITH_BOUNDARIES_TITLE__");
	v = v.replace(/\bQuiet quitting\b/g, "__REPLACE_WITH_BOUNDARIES_UPPER__");
	v = v.replace(/\bQUIET QUITTING\b/g, "__REPLACE_WITH_BOUNDARIES_CAPS__");
	v = v.replace(/\bquiet quitting\b/g, "__REPLACE_WITH_BOUNDARIES_LOWER__");
	v = v.replace(/__REPLACE_WITH_BOUNDARIES_TITLE__/g, "Setting Reasonable Boundaries");
	v = v.replace(/__REPLACE_WITH_BOUNDARIES_UPPER__/g, "Setting reasonable boundaries");
	v = v.replace(/__REPLACE_WITH_BOUNDARIES_CAPS__/g, "SETTING REASONABLE BOUNDARIES");
	v = v.replace(/__REPLACE_WITH_BOUNDARIES_LOWER__/g, "setting reasonable boundaries");
	
	textNode.nodeValue = v;
}


