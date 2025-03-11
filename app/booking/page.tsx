'use client';
import { bookingAction } from '@/utils/booking';
import { useActionState } from 'react';
import Input from '@/components/Input';
import Link from 'next/link';

export default function BookingForm() {
  const [, action, isPending] = useActionState(bookingAction, null);

  return (
    <>
      <form action={action} className="bg-white shadow-lg rounded-xl p-6 space-y-4">
        <h2 className="text-2xl font-bold text-teal-700 text-center mb-4">املأ بياناتك</h2>

        <Input label="الاسم الكامل*" type="text" name="Name" required minLength={7} placeholder="ادخل اسمك الكامل" />
        <Input label="رقم الهاتف*" type="tel" name="Phone" required placeholder="01XXXXXXXXX" />
        <label className="block mb-1 text-teal-800">الصف الدراسي</label>
        <select
          name="Class"
          defaultValue={3}
          required
          className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
        >
          <option value={2}>الصف الثاني الثانوي</option>
          <option value={3}>الصف الثالث الثانوي</option>
        </select>
        <Input label="رسالتك أو ملاحظات" type="textarea" name="Message" placeholder="اكتب أي ملاحظات إضافية..." />

        <button
          type="submit"
          disabled={isPending}
          className="disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-teal-800 w-full bg-teal-700 text-white py-2 rounded-md hover:bg-teal-800 transition hover:cursor-pointer"
        >
          {isPending ? 'جاري إرسال الطلب...' : 'إرسال الطلب'}
        </button>
      </form>
      <div className="text-center mt-4">
        <Link href="/" className="text-teal-700 hover:text-teal-900">
          العودة إلى الصفحة الرئيسية ⬅️
        </Link>
      </div>
    </>
  );
}
