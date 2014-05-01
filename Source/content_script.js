walk(document.body);

function walk(node) 
{
	// I stole this function from here:
	// http://is.gd/mwZp7E
	
	var child, next;

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

	v = v.replace(/\bBitcoin\b/g, "__REPLACE_WITH_BACON_UPPER__");
	v = v.replace(/\bBITCOIN\b/g, "__REPLACE_WITH_BACON_CAPS__");
	v = v.replace(/\bbitcoin\b/g, "__REPLACE_WITH_BACON_LOWER__");
	v = v.replace(/\bBacon\b/g, "Bitcoin");
	v = v.replace(/\bBACON\b/g, "BITCOIN");
	v = v.replace(/\bbacon\b/g, "bitcoin");
	v = v.replace(/__REPLACE_WITH_BACON_UPPER__/g, "Bacon");
	v = v.replace(/__REPLACE_WITH_BACON_CAPS__/g, "BACON");
	v = v.replace(/__REPLACE_WITH_BACON_LOWER__/g, "bacon");
	
	textNode.nodeValue = v;
}


