"use client";

import { motion } from "framer-motion";
import React, { MouseEvent } from "react";

const ResumeButton: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed bottom-5 right-5 z-50"
    >
      <motion.a
        href="/Rajalingam-Muthiah-Resume_Updtaed.pdf"
        target="_blank"
        rel="noopener noreferrer"
        download
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-5 rounded-lg shadow-lg transition-colors duration-300"
        onClick={(e: MouseEvent<HTMLAnchorElement>) => {
          // Prevent default to control open + download behavior
          e.preventDefault();
          const url = "/Rajalingam-Muthiah-Resume_Updtaed.pdf";
          // Open the PDF in a new tab
          const newWin = window.open(url, "_blank", "noopener,noreferrer");

          // Attempt to trigger download inside the new tab after a short delay
          setTimeout(() => {
            try {
              if (newWin && newWin.document) {
                const link = newWin.document.createElement("a");
                link.href = url;
                link.download = "Rajalingam-Muthiah-Resume_Updtaed.pdf";
                // Some browsers require the element to be in the DOM
                newWin.document.body.appendChild(link);
                link.click();
                newWin.document.body.removeChild(link);
              } else {
                // Fallback: trigger download in the current tab
                const link = document.createElement("a");
                link.href = url;
                link.download = "Rajalingam-Muthiah-Resume_Updtaed.pdf";
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }
            } catch (err) {
              // Final fallback in case of cross-origin or popup blockers
              const link = document.createElement("a");
              link.href = url;
              link.download = "Rajalingam-Muthiah-Resume_Updtaed.pdf";
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
            }
          }, 400);
        }}
      >
        Resume
      </motion.a>
    </motion.div>
  );
};

export default ResumeButton;
