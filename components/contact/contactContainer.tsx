/** @format */
"use client";

import Image from "next/image";
import { useState } from "react";
import { submitContactForm } from "@/actions/submitContactForm";
import { CtaButton } from "../ui/ctaButton";
import { FormInput } from "../ui/formInput";

const HOSPITAL_PHONE = "(604) 888-2628";
const HOSPITAL_PHONE_TEL = "+16048882628";

export const ContactContainer = () => {
  const [hospitalCopied, setHospitalCopied] = useState(false);
  const [formState, setFormState] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = (name: string, value: string): string => {
    if (
      ["firstName", "lastName", "subject", "message"].includes(name) &&
      !value.trim()
    )
      return `${name === "firstName" ? "First name" : name === "lastName" ? "Last name" : name.charAt(0).toUpperCase() + name.slice(1)} is required.`;
    if (name === "email") {
      if (!value.trim()) return "Email is required.";
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))
        return "Please enter a valid email address.";
    }
    if (name === "phone" && value.trim() && !/^[\d\s()\-+]{7,15}$/.test(value))
      return "Please enter a valid phone number.";
    return "";
  };

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    const error = validate(name, value);
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    // Validate all fields before submitting
    const fields = [
      "firstName",
      "lastName",
      "email",
      "phone",
      "subject",
      "message",
    ];
    const newErrors: Record<string, string> = {};
    fields.forEach((field) => {
      const err = validate(field, (data.get(field) as string) || "");
      if (err) newErrors[field] = err;
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setFormState("loading");
    setErrorMsg("");

    try {
      await submitContactForm({
        firstName: data.get("firstName") as string,
        lastName: data.get("lastName") as string,
        email: data.get("email") as string,
        phone: data.get("phone") as string,
        subject: data.get("subject") as string,
        message: data.get("message") as string,
      });
      setFormState("success");
      setErrors({});
      form.reset();
    } catch {
      setFormState("error");
      setErrorMsg("Something went wrong. Please try again.");
    }
  }

  return (
    <div className="max-w-[1920px] mx-auto overflow-x-hidden bg-primary-white relative">
      {/* Banner */}
      <Image
        src="/assets/contactBanner.webp"
        alt="Contact"
        width={1920}
        height={770}
        className="w-full h-auto md:scale-100 scale-165"
      />

      <div className="max-w-[1100px] mx-auto px-6 lg:px-4 md:pb-24">
        {/* Hospital Location & Hours Section */}
        <div className="mt-12 lg:mt-16 mb-12 lg:mb-16">
          <div className="w-full max-w-[784px] mx-auto bg-[#FFFCF7] rounded-[24px] lg:rounded-[16px] p-6 lg:p-8 shadow-[0px_0px_30px_0px_rgba(87,87,86,0.08)] border border-[#F0EAF8]">
            <h1 className="font-nunito font-bold text-[22px] lg:text-[24px] text-primary-black mb-3 pb-2 border-b-[3px] border-[#E7D2FF] w-fit">
              Our Location & Working Hours
            </h1>
            <p className="text-[14px] font-nunito font-medium text-primary-black leading-[160%] mb-4">
              In the event of an emergency during our normal office hours,
              please proceed directly to our practice and call while on the way.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 mb-6">
              {/* Map */}
              <div className="w-full sm:flex-1 rounded-[10px] overflow-hidden h-[180px] sm:h-[130px] relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10435.947027458502!2d-122.65553799218746!3d49.16285959999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5485d22c82a4bc57%3A0x6a99a60503a6347e!2sWalnut%20Grove%20Animal%20Hospital%20Langley!5e0!3m2!1sen!2sus!4v1729006985870!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                <a
                  href="https://www.google.com/maps/@49.1621211,-122.6416664,3a,75y,100h,90t/data=!3m6!1e1!3m4!1s-u8x4_P7E5D-O1_6Z3m6_A!2e0!7i16384!8i8192"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-2 right-2 bg-white/90 px-2 py-1 rounded text-[10px] font-bold text-primary-black shadow-sm hover:bg-primary-green hover:text-white transition-colors z-10"
                >
                  3D Street View
                </a>
              </div>

              {/* Working Hours */}
              <div className="text-[14px] font-nunito text-primary-black sm:min-w-[220px]">
                <p className="font-bold mb-2 text-[15px]">Working Hours</p>
                <p className="flex justify-between gap-3 mb-1.5">
                  <span className="font-medium">Monday to Friday :</span>
                  <span>8:30am-7:00pm</span>
                </p>
                <p className="flex justify-between gap-3">
                  <span className="font-medium">Saturday &amp; Sunday :</span>
                  <span>9:00am-5:00pm</span>
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-[#F0EAF8]">
              {/* Location Address */}
              <div className="flex items-center gap-2">
                <Image
                  src="/icons/location.svg"
                  alt="location"
                  width={18}
                  height={20}
                />
                <a
                  href="https://maps.google.com/?q=101A-20995+88+Ave+Langley+BC+V1M2C9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[14px] font-nunito font-medium text-primary-black underline hover:text-primary-green transition-colors"
                >
                  101A-20995 88 Ave, Langley, BC V1M2C9, Canada
                </a>
              </div>

              {/* Telephone button directly displaying phone number without attached icon badge */}
              <button
                type="button"
                onClick={() => {
                  if (/Mobi|Android/i.test(navigator.userAgent)) {
                    window.location.href = `tel:${HOSPITAL_PHONE_TEL}`;
                  } else {
                    navigator.clipboard.writeText(HOSPITAL_PHONE).then(() => {
                      setHospitalCopied(true);
                      setTimeout(() => setHospitalCopied(false), 2000);
                    });
                  }
                }}
                className="bg-primary-green text-white rounded-[18px] text-[16px] px-6 py-2.5 font-nunito font-semibold transition-all duration-500 hover:shadow-[inset_0px_0px_20px_0px_#FFF153] w-full sm:w-auto text-center"
              >
                {hospitalCopied ? "Number Copied!" : HOSPITAL_PHONE}
              </button>
            </div>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="flex flex-col items-center mb-10 overflow-hidden">
          <div className="flex flex-col lg:flex-row items-center gap-4 mb-6 lg:mb-2 text-center lg:text-left">
            <Image
              src="/assets/bluePaw.svg"
              alt="paw"
              width={67}
              height={69}
              className="bg-primary-blue/30 rounded-full p-2 w-[54px] lg:w-[67px] h-auto"
            />
            <h2 className="text-[24px] lg:text-[32px] font-otomanopee-one text-primary-black uppercase leading-tight">
              Have Any More Questions?
              <br className="hidden lg:block" />
              Send Us A Message
            </h2>
          </div>
          <p className="text-[15px] lg:text-[16px] font-nunito font-medium text-primary-black text-center mb-8 lg:mb-10 lg:max-w-[600px]">
            Use the form below and a member of our team will respond within the
            next 24 hours!
          </p>

          <form
            onSubmit={handleSubmit}
            className="w-full max-w-[784px] bg-[#FFFCF7] rounded-[24px] lg:rounded-[16px] p-6 lg:p-10 shadow-[0px_0px_30px_0px_rgba(87,87,86,0.08)]"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
              <FormInput
                name="firstName"
                label="First Name"
                required
                placeholder="enter first name"
              />
              <FormInput
                name="lastName"
                label="Last Name"
                required
                placeholder="enter last name"
                error={errors.lastName}
                onBlur={handleBlur}
              />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
              <FormInput
                name="email"
                label="Email ID"
                type="email"
                required
                placeholder="enter email ID"
                error={errors.email}
                onBlur={handleBlur}
              />
              <FormInput
                name="phone"
                label="Phone Number"
                type="tel"
                placeholder="enter phone number"
                error={errors.phone}
                onBlur={handleBlur}
              />
            </div>

            <div className="mb-6">
              <FormInput
                name="subject"
                label="Subject"
                required
                placeholder="enter subject"
                error={errors.subject}
                onBlur={handleBlur}
              />
            </div>

            <div className="mb-8">
              <FormInput
                name="message"
                label="Message/Feedback"
                required
                placeholder="enter message here"
                rows={5}
                error={errors.message}
                onBlur={handleBlur}
              />
            </div>

            {formState === "success" && (
              <p className="text-primary-green font-nunito font-semibold text-[15px] mb-4 text-center">
                ✓ Message sent! We'll get back to you within 24 hours.
              </p>
            )}
            {formState === "error" && (
              <p className="text-red-500 font-nunito font-semibold text-[15px] mb-4 text-center">
                {errorMsg}
              </p>
            )}

            <div className="flex justify-center">
              <button
                type="submit"
                disabled={formState === "loading"}
                className="bg-primary-green text-white rounded-[18px] text-[18px] px-10 py-2.5 font-nunito font-medium leading-[26px] capitalize transition-all duration-500 hover:shadow-[inset_0px_0px_20px_0px_#FFF153] disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {formState === "loading" ? "Sending..." : "Submit"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
