import React from 'react';
import { useApp } from '../../context/AppContext';
import { X, Trash2, ShoppingBag, ArrowLeft, ArrowRight, ShieldCheck } from 'lucide-react';

export const CartDrawer: React.FC = () => {
  const {
    lang,
    cart,
    removeFromCart,
    clearCart,
    isCartOpen,
    setIsCartOpen,
    formatPrice,
    setIsPaymentModalOpen,
  } = useApp();

  const ArrowIcon = lang === 'ar' ? ArrowLeft : ArrowRight;
  const totalEGP = cart.reduce((sum, item) => sum + item.price, 0);

  if (!isCartOpen) return null;

  const handleProceedToCheckout = () => {
    setIsCartOpen(false);
    setIsPaymentModalOpen(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop */}
      <div
        onClick={() => setIsCartOpen(false)}
        className="fixed inset-0 bg-overlay backdrop-blur-xs"
      />

      {/* Drawer Panel */}
      <div className="relative w-full max-w-md bg-surface border-s border-token h-full flex flex-col z-10 shadow-xl">
        {/* Header */}
        <div className="p-6 border-b border-token flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-accent-soft border border-accent-soft flex items-center justify-center text-accent">
              <ShoppingBag className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-main">
                {lang === 'ar' ? 'سلة الطلبات والخدمات' : 'Service & Order Cart'}
              </h3>
              <p className="text-xs text-muted">
                {cart.length}{' '}
                {lang === 'ar' ? 'عناصر مضافة للطلب' : 'items added to order'}
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={() => setIsCartOpen(false)}
            aria-label={lang === 'ar' ? 'إغلاق السلة' : 'Close cart'}
            className="p-2 rounded-lg bg-surface-2 text-muted hover-text-main transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {cart.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-12">
              <div className="w-16 h-16 rounded-2xl bg-surface-2 border border-token flex items-center justify-center text-muted mb-4">
                <ShoppingBag className="w-8 h-8" />
              </div>
              <h4 className="text-base font-bold text-main mb-2">
                {lang === 'ar' ? 'سلة الطلبات فارغة حالياً' : 'Your cart is currently empty'}
              </h4>
              <p className="text-xs text-muted max-w-xs leading-relaxed">
                {lang === 'ar'
                  ? 'يمكنك إضافة باقات الاستضافة السحابية، النطاقات، أو الخدمات الهندسية المتكاملة للمتابعة.'
                  : 'Add cloud hosting plans, domains, or engineering services to proceed.'}
              </p>
            </div>
          ) : (
            cart.map((item) => (
              <div
                key={item.id}
                className="p-4 rounded-xl bg-page border border-token flex items-start justify-between gap-4"
              >
                <div className="space-y-1">
                  <span className="inline-block px-2 py-0.5 rounded text-[10px] font-bold bg-accent-soft text-accent">
                    {item.type === 'hosting'
                      ? lang === 'ar'
                        ? 'استضافة سحابية'
                        : 'Cloud Hosting'
                      : item.type === 'domain'
                      ? lang === 'ar'
                        ? 'حجز نطاق'
                        : 'Domain'
                      : item.type === 'package'
                      ? lang === 'ar'
                        ? 'باقة متكاملة'
                        : 'Bundled Package'
                      : lang === 'ar'
                      ? 'خدمة هندسية'
                      : 'Engineering Service'}
                  </span>
                  <h4 className="text-sm font-bold text-main">{item.name}</h4>
                  {item.details && (
                    <p className="text-xs text-muted">{item.details}</p>
                  )}
                  <div className="text-sm font-bold text-accent pt-1">
                    <bdi dir="ltr" className="ltr-num">
                      {formatPrice(item.price)}
                    </bdi>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => removeFromCart(item.id)}
                  aria-label={lang === 'ar' ? 'حذف العنصر' : 'Remove item'}
                  className="p-2 rounded-lg text-muted hover-text-main transition-colors"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {cart.length > 0 && (
          <div className="p-6 border-t border-token bg-surface-2 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted">
                {lang === 'ar' ? 'الإجمالي التقديري:' : 'Estimated Total:'}
              </span>
              <span className="text-2xl font-bold text-main">
                <bdi dir="ltr" className="ltr-num">
                  {formatPrice(totalEGP)}
                </bdi>
              </span>
            </div>

            <div className="flex items-center gap-2 text-[11px] text-muted">
              <ShieldCheck className="w-4 h-4 text-accent shrink-0" />
              <span>
                {lang === 'ar'
                  ? 'يشمل ضمان استرداد الأموال لمدة 30 يوماً لخدمات الاستضافة ودعم فني 24/7'
                  : 'Includes 30-day money-back guarantee on hosting & 24/7 support'}
              </span>
            </div>

            <div className="grid grid-cols-3 gap-2 pt-2">
              <button
                type="button"
                onClick={clearCart}
                className="col-span-1 py-3 rounded-xl btn-secondary text-xs font-semibold"
              >
                {lang === 'ar' ? 'إفراغ السلة' : 'Clear'}
              </button>
              <button
                type="button"
                onClick={handleProceedToCheckout}
                className="col-span-2 py-3 rounded-xl btn-primary text-sm font-bold"
              >
                <span>{lang === 'ar' ? 'إتمام الطلب والدفع' : 'Proceed to Checkout'}</span>
                <ArrowIcon className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
