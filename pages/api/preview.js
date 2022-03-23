export default function handler(req, res) {
  res.setPreviewData({ user: 'Dantes' });
  res.redirect(req.query.redirect);
}
