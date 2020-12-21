
const requireAll = requireContext => requireContext.keys().map(requireContext);
const svgs = require["context"]("./assets/icons", false, /\.svg$/);
requireAll(svgs);