export function FormatMarkdown(refElement, index) {
    if (refElement == null) {
        setTimeout(() => {
            formatSingleItem(index);
        }, 10);
    } else {
        formatAllItems(refElement);
    }
}

function formatSingleItem(index) {
    const element = document.getElementById(index);
    formatElement(element);
}

function formatAllItems(elementList) {
    for (const element of elementList) {
        formatElement(element);
    }
}

function formatElement(element) {
    let format = element.innerText;

    format = applyWhatsappStyles(format, "_", "<i>", "</i>");
    format = applyWhatsappStyles(format, "*", "<b>", "</b>");
    format = applyWhatsappStyles(format, "~", "<s>", "</s>");
    format = format.replace(/\n/gi, "<br>");

    element.innerHTML = format;
}

function applyWhatsappStyles(format, wildcard, opTag, clTag) {
    let indices = [];
    for (let i = 0; i < format.length; i++) {
        if (format[i] === wildcard) {
            if (indices.length % 2)
                (format[i - 1] === " ") ? null : ((typeof (format[i + 1]) == "undefined") ? indices.push(i) : (is_aplhanumeric(format[i + 1]) ? null : indices.push(i)));
            else
                (typeof (format[i + 1]) == "undefined") ? null : ((format[i + 1] === " ") ? null : (typeof (format[i - 1]) == "undefined") ? indices.push(i) : ((is_aplhanumeric(format[i - 1])) ? null : indices.push(i)));
        } else {
            (format[i].charCodeAt() === 10 && indices.length % 2) ? indices.pop() : null;
        }
    }
    (indices.length % 2) ? indices.pop() : null;

    let e = 0;
    indices.forEach(function (v, i) {
        let t = (i % 2) ? clTag : opTag;
        v += e;
        format = format.substr(0, v) + t + format.substr(v + 1);
        e += (t.length - 1);
    });
    return format;
}

function is_aplhanumeric(c) {
    const x = c.charCodeAt();
    return ((x >= 65 && x <= 90) || (x >= 97 && x <= 122) || (x >= 48 && x <= 57));
}
