const RE_SPLIT = /[, ]/;

export default function words(text='') {
    return text.split(RE_SPLIT);
}
