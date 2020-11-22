module.exports = class JSCError extends Error {
    constructor(...message) {
        super(message)
    };

    get name() {
        return "JSCError"
    }
};