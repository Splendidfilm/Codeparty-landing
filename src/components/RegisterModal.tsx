import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: "child" | "school";   // To know which type of registration
}

export default function RegistrationModal({ isOpen, onClose, type }: RegistrationModalProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    childName: "",
    age: "",
    schoolName: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    alert(`Registration for ${type === "child" ? "Child" : "School"} submitted successfully! 🎉`);
    onClose();
  };

  return (
    <AnimatePresence
    >
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[999]"
          />

          {/* Modal */}
          <div className="fixed inset-0 scale-90 flex z-[1000]  items-center justify-center p-4 w-full">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="bg-white dark:bg-zinc-900 w-full max-w-lg rounded-3xl overflow-y-auto shadow-2xl"
            >
              {/* Header */}
              <div className="bg-brand-green px-8 py-6 text-white flex justify-between items-center">
                <div>
                  <h3 className="text-2xl font-display font-bold">
                    {type === "child" ? "Register Your Child" : "Register Your School"}
                  </h3>
                  <p className="text-white/80 text-sm mt-1">
                    Codeplay72 • Children's Day 2026
                  </p>
                </div>
                <button
                  onClick={onClose}
                  className="text-white/80 hover:text-white transition-colors"
                >
                  <span className="material-symbols-outlined text-3xl">close</span>
                </button>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="p-8 space-y-6">
                {type === "child" ? (
                  <>
                    <div>
                      <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">
                        Parent's Full Name
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                        className="w-full px-5 py-3 rounded-2xl border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 focus:outline-none focus:border-brand-green"
                        placeholder="Adeola Johnson"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">
                          Child's Name
                        </label>
                        <input
                          type="text"
                          name="childName"
                          value={formData.childName}
                          onChange={handleChange}
                          required
                          className="w-full px-5 py-3 rounded-2xl border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 focus:outline-none focus:border-brand-green"
                          placeholder="Chinedu Johnson"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">
                          Age
                        </label>
                        <select
                          name="age"
                          value={formData.age}
                          onChange={handleChange}
                          required
                          className="w-full px-5 py-3 rounded-2xl border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 focus:outline-none focus:border-brand-green"
                        >
                          <option value="">Select Age</option>
                          <option value="6-8">6 - 8 years</option>
                          <option value="9-11">9 - 11 years</option>
                          <option value="12-14">12 - 14 years</option>
                          <option value="15-17">15 - 17 years</option>
                        </select>
                      </div>
                    </div>
                  </>
                ) : (
                  <div>
                    <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">
                      School Name
                    </label>
                    <input
                      type="text"
                      name="schoolName"
                      value={formData.schoolName}
                      onChange={handleChange}
                      required
                      className="w-full px-5 py-3 rounded-2xl border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 focus:outline-none focus:border-brand-green"
                      placeholder="Jos International Academy"
                    />
                  </div>
                )}

                <div>
                  <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-3 rounded-2xl border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 focus:outline-none focus:border-brand-green"
                    placeholder="parent@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-3 rounded-2xl border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 focus:outline-none focus:border-brand-green"
                    placeholder="+234 803 123 4567"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">
                    Any special request or message? (Optional)
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={3}
                    className="w-full px-5 py-3 rounded-2xl border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 focus:outline-none focus:border-brand-green resize-y"
                    placeholder="My child is particularly interested in AI..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-accent-yellow hover:bg-yellow-400 text-zinc-900 font-semibold text-xl py-6 rounded-2xl transition-all active:scale-95 mt-4"
                >
                  {type === "child" ? "Complete Child Registration" : "Register School"}
                </button>
              </form>

              <div className="px-8 py-6 text-center text-xs text-zinc-500 border-t dark:border-zinc-800">
                Early bird registration closes soon • Limited slots available
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}