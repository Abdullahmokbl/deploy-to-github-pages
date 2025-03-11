export const bookingAction = async (_: unknown, formData: FormData) : Promise<void> => {
  const googleSheetScript = "https://script.google.com/macros/s/AKfycbzZKY1QbKl4VZX_J-BWmB7iBOq0yCkKla_gwBYiozdSvMZVH0IeIQJ7lmPnspwVpP7Bpg/exec"
  await fetch(googleSheetScript, { method: "POST", mode: "no-cors", body: formData })
  .then(() => alert('✅ تم إرسال طلبك بنجاح! سنقوم بالتواصل معك قريبًا.'))
  .catch(() => alert('❌ حدث خطأ أثناء إرسال الطلب. يرجى المحاولة مرة أخرى.'))
  return
}