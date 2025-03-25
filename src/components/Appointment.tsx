
import React, { useState } from 'react';
import ButtonCustom from './ui/button-custom';
import { Phone, Clock, Calendar, MapPin } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { format } from "date-fns";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

const appointmentFormSchema = z.object({
  name: z.string().min(3, { message: "الاسم مطلوب ويجب أن يتكون من 3 أحرف على الأقل" }),
  phone: z.string().min(10, { message: "رقم الهاتف مطلوب ويجب أن يتكون من 10 أرقام على الأقل" }),
  date: z.date({ required_error: "التاريخ مطلوب" }),
  time: z.string({ required_error: "الوقت مطلوب" }),
});

const timeSlots = [
  "09:00", "09:30", "10:00", "10:30", "11:00", "11:30",
  "12:00", "12:30", "14:00", "14:30", "15:00", "15:30", 
  "16:00", "16:30", "17:00", "17:30"
];

const Appointment = () => {
  const [open, setOpen] = useState(false);
  
  const form = useForm<z.infer<typeof appointmentFormSchema>>({
    resolver: zodResolver(appointmentFormSchema),
    defaultValues: {
      name: "",
      phone: "",
    },
  });

  function onSubmit(data: z.infer<typeof appointmentFormSchema>) {
    // You would typically send this data to a backend service
    console.log("Appointment data:", data);
    
    toast.success("تم حجز موعدك بنجاح!", {
      description: `${data.name} - ${format(data.date, "dd/MM/yyyy")} ${data.time}`,
      duration: 5000,
    });
    
    form.reset();
    setOpen(false);
  }

  const today = new Date();
  const disabledDays = [
    { from: new Date(0), to: new Date(today.setDate(today.getDate() - 1)) },
    { dayOfWeek: [5] } // Friday is usually a day off
  ];

  return (
    <section id="appointment" className="bg-medical-50 relative">
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-background to-transparent"></div>
      
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in" style={{ direction: 'rtl' }}>
          <h2 className="section-title inline-block">حجز موعد</h2>
          <div className="w-20 h-1 bg-medical-500 mx-auto mt-2 mb-6"></div>
          <p className="section-subtitle mx-auto">
            نحن هنا لمساعدتك، يمكنك حجز موعد بسهولة من خلال الاتصال المباشر أو ملء النموذج
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row items-stretch gap-8">
          <div className="w-full md:w-1/2 animate-slide-up" style={{ animationDelay: "0.1s" }}>
            <div className="glass-card p-8 h-full">
              <h3 className="text-2xl font-medium text-medical-900 mb-6 text-center md:text-right">معلومات التواصل</h3>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4 rtl:flex-row-reverse">
                  <div className="icon-box shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="flex-1 rtl:text-right">
                    <h4 className="font-medium text-medical-900 mb-1">رقم الهاتف</h4>
                    <a href="tel:0645483280" className="text-medical-700 hover:text-medical-500 transition-colors">0645483280</a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 rtl:flex-row-reverse">
                  <div className="icon-box shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div className="flex-1 rtl:text-right">
                    <h4 className="font-medium text-medical-900 mb-1">ساعات العمل</h4>
                    <p className="text-medical-700">الأحد - الخميس: 9:00 ص - 6:00 م</p>
                    <p className="text-medical-700">السبت: 10:00 ص - 2:00 م</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 rtl:flex-row-reverse">
                  <div className="icon-box shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="flex-1 rtl:text-right">
                    <h4 className="font-medium text-medical-900 mb-1">العنوان</h4>
                    <p className="text-medical-700">عيادة د. نادية نعيم - أخصائية أنف وأذن وحنجرة</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <div className="glass-card p-8 h-full flex flex-col">
              <h3 className="text-2xl font-medium text-medical-900 mb-6 text-center md:text-right">احجز موعدك الآن</h3>
              
              <p className="text-medical-700 mb-6 text-center md:text-right">
                يمكنك حجز موعد مع الدكتورة نادية نعيم عن طريق الاتصال المباشر برقم الهاتف أو عبر تعبئة نموذج الحجز الإلكتروني.
              </p>
              
              <div className="mt-auto space-y-4">
                <ButtonCustom 
                  variant="primary" 
                  icon={<Phone size={18} />} 
                  className="w-full justify-center text-lg py-6 rtl:flex-row-reverse"
                  onClick={() => window.location.href = 'tel:0645483280'}
                >
                  اتصل الآن: 0645483280
                </ButtonCustom>
                
                <Dialog open={open} onOpenChange={setOpen}>
                  <DialogTrigger asChild>
                    <ButtonCustom 
                      variant="secondary" 
                      icon={<Calendar size={18} />} 
                      className="w-full justify-center text-lg py-6 rtl:flex-row-reverse"
                    >
                      احجز موعد إلكتروني
                    </ButtonCustom>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[525px] overflow-y-auto max-h-[90vh]" dir="rtl">
                    <DialogHeader>
                      <DialogTitle className="text-2xl font-bold text-center mb-4">حجز موعد جديد</DialogTitle>
                    </DialogHeader>
                    
                    <Form {...form}>
                      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>الاسم الكامل</FormLabel>
                              <FormControl>
                                <Input placeholder="أدخل الاسم الكامل" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="phone"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>رقم الهاتف</FormLabel>
                              <FormControl>
                                <Input placeholder="أدخل رقم الهاتف" type="tel" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="date"
                          render={({ field }) => (
                            <FormItem className="flex flex-col">
                              <FormLabel>تاريخ الموعد</FormLabel>
                              <Popover>
                                <PopoverTrigger asChild>
                                  <FormControl>
                                    <ButtonCustom
                                      variant="outline"
                                      className={cn(
                                        "w-full pl-3 text-right font-normal",
                                        !field.value && "text-muted-foreground"
                                      )}
                                    >
                                      {field.value ? (
                                        format(field.value, "dd/MM/yyyy")
                                      ) : (
                                        <span>اختر التاريخ</span>
                                      )}
                                      <Calendar className="ml-auto h-4 w-4 opacity-50" />
                                    </ButtonCustom>
                                  </FormControl>
                                </PopoverTrigger>
                                <PopoverContent className="w-auto p-0" align="start">
                                  <CalendarComponent
                                    mode="single"
                                    selected={field.value}
                                    onSelect={field.onChange}
                                    disabled={disabledDays}
                                    initialFocus
                                    className={cn("p-3 pointer-events-auto")}
                                  />
                                </PopoverContent>
                              </Popover>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="time"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>وقت الموعد</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="اختر الوقت" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  {timeSlots.map((time) => (
                                    <SelectItem key={time} value={time}>
                                      {time}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <ButtonCustom 
                          type="submit" 
                          variant="primary"
                          className="w-full justify-center py-4 mt-6"
                        >
                          تأكيد الحجز
                        </ButtonCustom>
                      </form>
                    </Form>
                  </DialogContent>
                </Dialog>
              </div>
              
              <p className="text-sm text-medical-600 mt-4 text-center">
                يرجى الاتصال خلال ساعات العمل للحصول على استجابة سريعة
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-16 flex flex-col md:flex-row items-center justify-between gap-8 bg-white rounded-2xl p-8 shadow-lg animate-fade-in rtl" style={{ animationDelay: "0.3s" }}>
          <div className="text-center md:text-right">
            <h3 className="text-2xl font-medium text-medical-900 mb-2">هل لديك استفسارات طبية؟</h3>
            <p className="text-medical-700">نحن هنا للإجابة على أسئلتك وتقديم المساعدة اللازمة</p>
          </div>
          
          <ButtonCustom 
            variant="secondary" 
            icon={<Calendar size={18} />} 
            size="lg"
            className="rtl:flex-row-reverse"
            onClick={() => document.getElementById('appointment')?.scrollIntoView({ behavior: 'smooth' })}
          >
            تواصل معنا
          </ButtonCustom>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default Appointment;
