import React from 'react';
import { useApp } from '../../context/AppContext';
import {
  X,
  Trash2,
  ShoppingBag,
  ArrowLeft,
  ArrowRight,
  ShieldCheck,
  Plus,
  Minus,
} from 'lucide-react';

export const CartDrawer: React.FC = () => {
  const {
    lang,
    cart,
    cartCount,
    updateCartQuantity,
    removeFromCart,
    clearCart,
    isCartOpen,
    setIsCartOpen,
    formatPrice,
    setIsPaymentModalOpen,
  } = useApp();

  const ArrowIcon = lang === 'ar' ? ArrowLeft : ArrowRight;
  const totalEGP = cart.reduce((sum, item) => sum + item.price * (item.quantity || 1), 0);

  if (!isCartOpen) return null;

  const handleProceedToCheckout = () => {
    setIsCartOpen(false);
    setIsPaymentModalOpen(true);
  };

  return (
    <div className="fixed inset-0 z-[75] flex justify-end" data-testid="cart-drawer">
      {/* Backdrop */}
      <div
        onClick={() => setIsCartOpen(false)}
        className="fixed inset-0 bg-overlay backdrop-blur-sm"
      />

      {/* Frosted Glass Drawer Panel */}
      <div className="relative w-full max-w-md glass-panel rounded-none border-s border-token h-full flex flex-col z-10 shadow-2xl">
        {/* Header */}
        <div className="p-5 sm:p-6 border-b border-token flex items-center justify-between bg-surface-2">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-accent-soft border border-accent-soft flex items-center justify-center text-accent">
              <ShoppingBag className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-main">
                {lang === 'ar' ? 'سلة الطلبات والخدمات' : 'Service & Order Cart'}
              </h3>
              <p className="text-xs text-muted ltr-num">
                {cartCount} {lang === 'ar' ? 'عناصر في الطلب' : 'items in cart'}
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={() => setIsCartOpen(false)}
            aria-label={lang === 'ar' ? 'إغلاق السلة' : 'Close cart'}
            className="min-h-[40px] min-w-[40px] inline-flex items-center justify-center rounded-lg bg-surface border border-token text-muted hover-text-main transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-3.5">
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
                  ? 'أضف خادماً سحابياً، نطاقاً تم فحصه، أو خدمة بنية تحتية للمتابعة وإصدار عرض سعر أو طلب تفعيل.'
                  : 'Add a configured cloud server, verified domain, or infrastructure service to proceed.'}
              </p>
            </div>
          ) : (
            cart.map((item) => {
              const qty = item.quantity || 1;
              const lineTotal = item.price * qty;
              return (
                <div
                  key={item.id}
                  className="p-4 rounded-xl bg-surface border border-token space-y-2.5"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="space-y-1 min-w-0">
                      <span className="text-[11px] font-semibold text-accent block">
                        {item.type === 'hosting'
                          ? lang === 'ar'
                            ? 'خادم سحابي / استضافة'
                            : 'Cloud Server / Hosting'
                          : item.type === 'domain'
                          ? lang === 'ar'
                            ? 'حجز نطاق'
                            : 'Domain Registration'
                          : item.type === 'package'
                          ? lang === 'ar'
                            ? 'باقة تجهيز شركات'
                            : 'Turnkey Package'
                          : lang === 'ar'
                          ? 'خدمة هندسية'
                          : 'Engineering Service'}
                      </span>
                      <h4 className="text-sm font-bold text-main leading-snug">{item.name}</h4>
                      {item.details && (
                        <p className="text-[11px] text-muted leading-relaxed">{item.details}</p>
                      )}
                    </div>
                    <button
                      type="button"
                      onClick={() => removeFromCart(item.id)}
                      aria-label={lang === 'ar' ? 'حذف العنصر' : 'Remove item'}
                      className="p-1.5 rounded-lg text-muted hover-text-main transition-colors shrink-0"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t border-token">
                    {item.type !== 'domain' ? (
                      <div className="inline-flex items-center gap-1 bg-surface-2 border border-token rounded-lg p-0.5">
                        <button
                          type="button"
                          onClick={() => updateCartQuantity(item.id, -1)}
                          aria-label={lang === 'ar' ? 'تقليل الكمية' : 'Decrease quantity'}
                          className="w-7 h-7 inline-flex items-center justify-center rounded text-muted hover-text-main"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="min-w-[24px] text-center text-xs font-bold text-main ltr-num">
                          {qty}
                        </span>
                        <button
                          type="button"
                          onClick={() => updateCartQuantity(item.id, 1)}
                          aria-label={lang === 'ar' ? 'زيادة الكمية' : 'Increase quantity'}
                          className="w-7 h-7 inline-flex items-center justify-center rounded text-muted hover-text-main"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    ) : (
                      <span className="text-[11px] text-muted">
                        {lang === 'ar' ? 'تسجيل سنة واحدة' : '1 Year Term'}
                      </span>
                    )}

                    <div className="text-sm font-bold text-accent">
                      <bdi dir="ltr" className="ltr-num">
                        {formatPrice(lineTotal)}
                      </bdi>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Footer */}
        {cart.length > 0 && (
          <div className="p-5 sm:p-6 border-t border-token bg-surface-2 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-muted">
                {lang === 'ar' ? 'الإجمالي المستحق:' : 'Total Due:'}
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
                  ? 'فاتورة ضريبية رسمية بالجنيه المصري · إعداد مجاني بدون رسوم خفية'
                  : 'Official local invoice · $0 setup fee with transparent billing'}
              </span>
            </div>

            <div className="grid grid-cols-3 gap-2 pt-1">
              <button
                type="button"
                onClick={clearCart}
                className="col-span-1 min-h-[44px] py-2.5 rounded-xl btn-secondary text-xs font-semibold"
              >
                {lang === 'ar' ? 'إفراغ' : 'Clear'}
              </button>
              <button
                type="button"
                onClick={handleProceedToCheckout}
                data-testid="cart-proceed-checkout"
                className="col-span-2 min-h-[44px] py-2.5 rounded-xl btn-primary text-sm font-bold inline-flex items-center justify-center gap-2"
              >
                <span>{lang === 'ar' ? 'إتمام الطلب' : 'Proceed to Order'}</span>
                <ArrowIcon className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
