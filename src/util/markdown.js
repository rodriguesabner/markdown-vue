export default function formatWppMarkdown(refElement) {
    if (refElement != null) {
        refElement.map((elem, index) => {
            console.log(elem, index);
            let format = elem.innerText;

            format = whatsappStyles(format, "_", "<i>", "</i>");
            format = whatsappStyles(format, "*", "<b>", "</b>");
            format = whatsappStyles(format, "~", "<s>", "</s>");
            format = format.replace(/\n/gi, "<br>");

            elem.innerHTML = format;
            // whatsappLinkStyle
        });
    }
}

function is_aplhanumeric(c) {
    var x = c.charCodeAt();
    return ((x >= 65 && x <= 90) || (x >= 97 && x <= 122) || (x >= 48 && x <= 57)) ? true : false;
}

function whatsappStyles(format, wildcard, opTag, clTag) {
    let indices = [];
    for (var i = 0; i < format.length; i++) {
        if (format[i] === wildcard) {
            if (indices.length % 2)
                (format[i - 1] == " ") ? null : ((typeof (format[i + 1]) == "undefined") ? indices.push(i) : (is_aplhanumeric(format[i + 1]) ? null : indices.push(i)));
            else
                (typeof (format[i + 1]) == "undefined") ? null : ((format[i + 1] == " ") ? null : (typeof (format[i - 1]) == "undefined") ? indices.push(i) : ((is_aplhanumeric(format[i - 1])) ? null : indices.push(i)));
        } else {
            (format[i].charCodeAt() == 10 && indices.length % 2) ? indices.pop() : null;
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
