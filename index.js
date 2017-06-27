exports = Promise.reflex = (til, response, once = false) => {
	var ended = false;
	var _reflex = () => {
		til().then(() => {
			if (!ended) {
				response();
				if (!once) {
					_reflex();
				}
			}
		});
	};
	_reflex();
	return () => {
		ended = true;
	};
};
