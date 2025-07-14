import { useState } from 'react';
import { FaCalendarAlt, FaUser, FaEnvelope, FaPhone, FaArrowLeft, FaMapMarkerAlt, FaClock, FaStethoscope, FaClinicMedical, FaWhatsapp } from 'react-icons/fa';
import { IoMdCheckmarkCircleOutline } from 'react-icons/io';

const BookingPage = () => {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', date: '', time: '',
    service: 'general-checkup', customService: '', message: ''
  });
  const [activeStep, setActiveStep] = useState(1);
  const [errors, setErrors] = useState({});

  const validateStep = (step) => {
    const newErrors = {};

    if (step === 1) {
      if (!formData.name.trim()) newErrors.name = 'Name is required';
      if (!formData.phone.trim()) newErrors.phone = 'Phone is required';
      if (formData.phone.trim() && !/^\d{10}$/.test(formData.phone)) {
        newErrors.phone = 'Phone must be 10 digits';
      }
    }

    if (step === 2) {
      if (!formData.date) newErrors.date = 'Date is required';
      if (!formData.time) newErrors.time = 'Time is required';
      if (!formData.service) newErrors.service = 'Service is required';
      if (formData.service === 'something-else' && !formData.customService.trim()) {
        newErrors.customService = 'Please specify your service';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user types
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateStep(activeStep)) {
      if (activeStep < 3) {
        nextStep();
      } else {
        // Prepare WhatsApp message
        const whatsappMessage =
          `*Appointment Booking Request*%0A%0A` +

          `*Patient Details*%0A` +
          `Name: ${formData.name}%0A` +
          `Mobile: ${formData.phone}%0A` +
          (formData.email ? `Email: ${formData.email}%0A` : '') +

          `%0A*Treatment Details*%0A` +
          `Service: ${formData.service === 'something-else'
            ? formData.customService
            : formData.service
              .split('-')
              .map(word => word.charAt(0).toUpperCase() + word.slice(1))
              .join(' ')
          }%0A` +
          `Date: ${formData.date}%0A` +
          `Time: ${formData.time}` +
          (formData.message ? `%0AMessage: ${formData.message}` : '');

        // Open WhatsApp with pre-filled message
        window.open(`https://wa.me/+918951146370?text=${whatsappMessage}`, '_blank');

        alert(`Appointment request for ${formData.name} received. We'll contact you shortly.`);
        setFormData({
          name: '', email: '', phone: '', date: '', time: '',
          service: 'general-checkup', customService: '', message: ''
        });
        setActiveStep(1);
      }
    }
  };

  const nextStep = () => {
    if (validateStep(activeStep)) {
      setActiveStep(prev => prev + 1);
    }
  };

  const prevStep = () => setActiveStep(prev => prev - 1);

  return (
    <div className="min-h-screen bg-blue-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <a href="/" className="flex items-center text-blue-600 hover:text-blue-800 mb-6">
            <FaArrowLeft className="mr-2" /> <span>Return to Home</span>
          </a>

          <div className="mb-6">
            <div className="bg-blue-600 text-white px-6 py-2 rounded-full inline-flex items-center mb-4">
              <FaStethoscope className="mr-2" />
              <span>Book Your Appointment</span>
            </div>
            <h1 className="text-4xl font-bold text-gray-800 mb-4">AL Hasina Dental Clinic</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Experience gentle dental care with modern technology and a personal touch
            </p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-2/5 bg-white rounded-xl shadow-md border border-gray-200">
            <div className="bg-blue-700 p-8 text-white">
              <div className="flex items-center mb-8">
                <div className="bg-white/20 p-3 rounded-xl mr-4">
                  <FaClinicMedical className="text-3xl" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white">AlHasina Dental Clinic</h2>
                  <p className="text-blue-100">Dr. Sarfullah Ansari – Cosmetic Dental Surgeon</p>
                </div>
              </div>

              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <div className="bg-white/10 p-3 rounded-lg mr-4 mt-1">
                    <FaPhone />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Appointments</h4>
                    <p className="text-blue-100">+91 89511 46370</p>
                    <p className="text-blue-100">+91 89719 73785</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-white/10 p-3 rounded-lg mr-4 mt-1">
                    <FaMapMarkerAlt />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Location</h4>
                    <p className="text-blue-100">1018, 16th Main Rd, near Udupi Garden, Tavarekere, Aicobo Nagar, 1st Stage, BTM 1st Stage</p>
                    <p className="text-blue-100">Bengaluru, Karnataka 560029</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-white/10 p-3 rounded-lg mr-4 mt-1">
                    <FaClock />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Timings</h4>
                    <p className="text-blue-100">Mon-Sat: 9:00 AM - 9:00 PM</p>
                    <p className="text-blue-100">Sun: Emergency Only</p>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 p-6 rounded-xl border border-white/20">
                <h4 className="font-bold text-xl mb-4 flex items-center">
                  <IoMdCheckmarkCircleOutline className="mr-3" /> Why Choose Us
                </h4>
                <ul className="space-y-3">
                  {['24/7 Emergency Care', 'Experienced Specialists', 'Advanced Diagnostics', 'Cashless Insurance'].map(item => (
                    <li key={item} className="flex items-start">
                      <IoMdCheckmarkCircleOutline className="mr-3 mt-1" />
                      <span className="text-blue-100">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="lg:w-3/5 bg-white rounded-xl shadow-md border border-gray-200">
            <div className="p-8">
              <div className="flex items-center mb-8">
                <div className="flex-1">
                  <div className="flex mb-4">
                    {[1, 2, 3].map(step => (
                      <div key={step} className="flex items-center">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${activeStep >= step ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-400'}`}>
                          {step}
                        </div>
                        {step < 3 && <div className={`w-16 h-1 mx-2 ${activeStep > step ? 'bg-blue-600' : 'bg-gray-100'}`}></div>}
                      </div>
                    ))}
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-2">
                    {['Patient Information', 'Appointment Details', 'Final Confirmation'][activeStep - 1]}
                  </h2>
                </div>
                <div className="bg-blue-50 p-3 rounded-lg">
                  <div className="text-blue-600 font-bold">Step {activeStep} of 3</div>
                </div>
              </div>

              <form onSubmit={handleSubmit}>
                {activeStep === 1 && (
                  <div className="space-y-6">
                    <InputField
                      icon={<FaUser />}
                      label="Full Name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      error={errors.name}
                      required
                    />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <InputField
                        icon={<FaEnvelope />}
                        label="Email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                      />
                      <InputField
                        icon={<FaPhone />}
                        label="Phone"
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        error={errors.phone}
                        required
                      />
                    </div>
                    <button
                      type="button"
                      onClick={nextStep}
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-medium transition"
                    >
                      Continue
                    </button>
                  </div>
                )}

                {activeStep === 2 && (
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <InputField
                        icon={<FaCalendarAlt />}
                        label="Preferred Date"
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        error={errors.date}
                        required
                      />
                      <SelectField
                        icon={<FaClock />}
                        label="Preferred Time"
                        name="time"
                        value={formData.time}
                        onChange={handleChange}
                        options={[
                          '09:00 AM', '10:30 AM', '12:00 PM', '02:00 PM', '04:00 PM', '06:00 PM'
                        ]}
                        error={errors.time}
                        required
                      />
                    </div>
                    <div>
                      <SelectField
                        label="Consultation Type"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        options={[
                          'General Checkup',
                          'Cardiology Consultation',
                          'Dental Care',
                          'Dermatology',
                          'Pediatrics',
                          'Orthopedics',
                          'Something Else'
                        ]}
                        error={errors.service}
                        required
                      />
                      {formData.service === 'something-else' && (
                        <div className="mt-4">
                          <InputField
                            label="Please specify your consultation type"
                            name="customService"
                            value={formData.customService}
                            onChange={handleChange}
                            error={errors.customService}
                            required
                          />
                        </div>
                      )}
                    </div>
                    <div className="flex justify-between pt-4">
                      <button
                        type="button"
                        onClick={prevStep}
                        className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition"
                      >
                        Back
                      </button>
                      <button
                        type="button"
                        onClick={nextStep}
                        className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-lg"
                      >
                        Continue
                      </button>
                    </div>
                  </div>
                )}

                {activeStep === 3 && (
                  <div className="space-y-6">
                    <div className="bg-blue-50 p-6 rounded-lg">
                      <h3 className="font-bold text-lg mb-4">Appointment Summary</h3>
                      <div className="space-y-3">
                        <p><span className="font-semibold">Name:</span> {formData.name}</p>
                        {formData.email && <p><span className="font-semibold">Email:</span> {formData.email}</p>}
                        <p><span className="font-semibold">Phone:</span> {formData.phone}</p>
                        <p><span className="font-semibold">Date:</span> {formData.date}</p>
                        <p><span className="font-semibold">Time:</span> {formData.time}</p>
                        <p><span className="font-semibold">Service:</span> {
                          formData.service === 'something-else'
                            ? formData.customService
                            : formData.service.split('-').map(word =>
                              word.charAt(0).toUpperCase() + word.slice(1))
                              .join(' ')
                        }</p>
                      </div>
                    </div>

                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="4"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                      placeholder="Any medical concerns or special requests"
                    />

                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-bold text-blue-800 mb-3">Emergency Contact</h4>
                      <p className="text-gray-700">For emergencies, please call: <span className="font-semibold">+91 89511 46370</span></p>
                    </div>

                    <div className="flex justify-between pt-4">
                      <button
                        type="button"
                        onClick={prevStep}
                        className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition"
                      >
                        Back
                      </button>
                      <button
                        type="submit"
                        className="bg-green-600 hover:bg-green-700 text-white py-3 px-8 rounded-lg font-medium flex items-center justify-center"
                      >
                        <FaWhatsapp className="mr-2" />
                        Confirm via WhatsApp
                      </button>
                    </div>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const InputField = ({ icon, label, type = 'text', name, value, onChange, error, required }) => (
  <div>
    <label className="block text-gray-700 font-medium mb-2">
      {label} {required && <span className="text-blue-600">*</span>}
    </label>
    <div className="relative">
      {icon && (
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
          {icon}
        </div>
      )}
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className={`w-full ${icon ? 'pl-10' : 'pl-4'} pr-4 py-2 border ${error ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
      />
    </div>
    {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
  </div>
);

const SelectField = ({ icon, label, name, value, onChange, options, error, required }) => (
  <div>
    <label className="block text-gray-700 font-medium mb-2">
      {label} {required && <span className="text-blue-600">*</span>}
    </label>
    <div className="relative">
      {icon && <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">{icon}</div>}
      <select
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className={`w-full ${icon ? 'pl-10' : 'pl-4'} pr-4 py-2 border ${error ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-blue-500 appearance-none bg-white`}
      >
        <option value="">Select {label.toLowerCase()}</option>
        {options.map(opt => (
          <option key={opt} value={opt.toLowerCase().replace(/\s+/g, '-')}>
            {opt}
          </option>
        ))}
      </select>
    </div>
    {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
  </div>
);

export default BookingPage; 