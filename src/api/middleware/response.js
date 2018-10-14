module.exports = (req, res, next) => {

    res.ok = (content) => {
        res.status(200).json(content);
    }

    res.error = (message, status) => {
        res.status(status || 500).json({ message });
    }

    next();
}