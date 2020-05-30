exports.getErrorpage = (req, res, next) => {
    res.status(404).render('errorpage', { pageTitle: 'WMSNextGo' });
}