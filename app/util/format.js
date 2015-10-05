function format(interval, timeOffset) {
    return `${interval} ${timeOffset}(s) ago`;
}

function timeAgo(date) {
    let interval;
    const seconds = Math.floor((new Date() - date) / 1000);

    interval = Math.floor(seconds / 31536000);
    if (interval >= 1) return format(interval, 'year');

    interval = Math.floor(seconds / 2592000);
    if (interval >= 1) return format(interval, 'month');

    interval = Math.floor(seconds / 86400);
    if (interval >= 1) return format(interval, 'day');

    interval = Math.floor(seconds / 3600);
    if (interval >= 1) return format(interval, 'hour');

    interval = Math.floor(seconds / 60);
    if (interval >= 1) return format(interval, 'minute');

    return format(interval, 'second');
}

export { timeAgo };
