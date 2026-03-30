// Cart — selected products 

function Cart({ items, onRemove, onCheckout }) {
  // total price 
  const total = items.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="max-w-2xl mx-auto">
      
      {/* Cart (when Blank) */}
      {items.length === 0 ? (
        <div className="text-center py-16 text-gray-400">
          <div className="text-5xl mb-4">🛒</div>
          <p className="text-lg">Your cart is empty.</p>
          <p className="text-sm mt-1">Browse products and add them here.</p>
        </div>
      ) : (
        <>
          <h3 className="font-bold text-gray-900 text-lg mb-4">Your Cart</h3>

          {/* Cart items */}
          {items.map((item) => (
            <div key={item.cartKey} className="bg-white border border-gray-200 rounded-xl px-5 py-4 flex items-center gap-4 mb-3 hover:border-gray-300 transition-colors">
              
              {/* Icon */}
              <div className="w-10 h-10 bg-gray-50 rounded-lg flex items-center justify-center text-xl flex-shrink-0">
                {item.icon}
              </div>

              {/* Info */}
              <div className="flex-1">
                <div className="font-semibold text-gray-900 text-sm">{item.name}</div>
                <div className="text-gray-500 text-xs mt-0.5">${item.price}/{item.period}</div>
              </div>

              {/* Remove button */}
              <button
                onClick={() => onRemove(item.cartKey)}
                className="border border-red-200 text-red-500 text-xs font-semibold px-4 py-1.5 rounded-full hover:bg-red-500 hover:text-white transition-all cursor-pointer bg-transparent"
              >
                Remove
              </button>
            </div>
          ))}

          {/* Total - Checkout */}
          <div className="border-t border-gray-200 pt-4 mt-2">
            <div className="flex justify-between font-bold text-gray-900 mb-4">
              <span>Total</span>
              <span>${total}</span>
            </div>
            <button
              onClick={onCheckout}
              className="w-full bg-violet-600 text-white font-bold py-3.5 rounded-full hover:bg-violet-700 transition-colors border-none cursor-pointer text-base"
            >
              Proceed To Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;