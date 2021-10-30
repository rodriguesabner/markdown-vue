import {formatAllItems, formatSingleItem} from "./service/markdown.service";

function FormatMarkdownService(refElement, index) {
    if (refElement == null) {
        setTimeout(() => {
            formatSingleItem(index);
        }, 10);
    } else {
        formatAllItems(refElement);
    }
}

export default FormatMarkdownService;