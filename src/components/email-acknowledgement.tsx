import * as React from "react";

interface AcknowledgementEmailProps {
  fullName: string;
  message: string;
  portfolioOwnerName: string;
}

export const AcknowledgementEmailTemplate: React.FC<
  Readonly<AcknowledgementEmailProps>
> = ({ fullName, message, portfolioOwnerName }) => (
  <div
    style={{
      fontFamily: "Arial, sans-serif",
      maxWidth: "600px",
      margin: "0 auto",
      padding: "20px",
      backgroundColor: "#f9f9f9",
      color: "#333",
    }}
  >
    <div
      style={{
        backgroundColor: "#ffffff",
        borderRadius: "8px",
        padding: "32px",
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
      }}
    >
      {/* Header */}
      <div
        style={{
          textAlign: "center" as const,
          marginBottom: "32px",
          borderBottom: "2px solid #f0f0f0",
          paddingBottom: "24px",
        }}
      >
        <h1
          style={{
            margin: "0 0 8px 0",
            fontSize: "28px",
            fontWeight: "bold",
            color: "#1a1a1a",
          }}
        >
          Message Received ✓
        </h1>
        <p
          style={{
            margin: "0",
            fontSize: "14px",
            color: "#666",
          }}
        >
          Thank you for reaching out
        </p>
      </div>

      {/* Body */}
      <div style={{ marginBottom: "24px" }}>
        <p
          style={{
            margin: "0 0 16px 0",
            fontSize: "16px",
            lineHeight: "1.6",
            color: "#333",
          }}
        >
          Hi <strong>{fullName}</strong>,
        </p>

        <p
          style={{
            margin: "0 0 16px 0",
            fontSize: "15px",
            lineHeight: "1.6",
            color: "#555",
          }}
        >
          Thank you for contacting me through my portfolio. I&apos;ve received your
          message and appreciate you taking the time to reach out. I&apos;ll review
          your message carefully and get back to you as soon as possible.
        </p>
      </div>

      {/* Message Copy */}
      <div
        style={{
          backgroundColor: "#f5f5f5",
          border: "1px solid #e0e0e0",
          borderRadius: "6px",
          padding: "16px",
          marginBottom: "24px",
        }}
      >
        <p
          style={{
            margin: "0 0 8px 0",
            fontSize: "12px",
            fontWeight: "bold",
            textTransform: "uppercase" as const,
            letterSpacing: "0.5px",
            color: "#999",
          }}
        >
          Your Message
        </p>
        <p
          style={{
            margin: "0",
            fontSize: "14px",
            lineHeight: "1.6",
            color: "#333",
            whiteSpace: "pre-wrap" as const,
            wordBreak: "break-word" as const,
          }}
        >
          {message}
        </p>
      </div>

      {/* Closing */}
        <p
          style={{
            margin: "0 0 16px 0",
            fontSize: "15px",
            lineHeight: "1.6",
            color: "#555",
          }}
        >
          In the meantime, feel free to explore more of my work or connect with
          me on my social media channels. Looking forward to our conversation!
        </p>

      {/* Signature */}
      <div
        style={{
          borderTop: "1px solid #e0e0e0",
          paddingTop: "24px",
          marginTop: "32px",
        }}
      >
        <p
          style={{
            margin: "0 0 8px 0",
            fontSize: "15px",
            fontWeight: "bold",
            color: "#1a1a1a",
          }}
        >
          Best regards,
        </p>
        <p
          style={{
            margin: "0 0 4px 0",
            fontSize: "15px",
            color: "#333",
          }}
        >
          {portfolioOwnerName}
        </p>
        <p
          style={{
            margin: "0",
            fontSize: "13px",
            color: "#999",
          }}
        >
          Full-Stack Developer | Creative Technologist
        </p>
      </div>

      {/* Footer */}
      <div
        style={{
          marginTop: "24px",
          paddingTop: "16px",
          borderTop: "1px solid #f0f0f0",
          textAlign: "center" as const,
        }}
      >
        <p
          style={{
            margin: "0",
            fontSize: "12px",
            color: "#999",
          }}
        >
          This is an automated acknowledgement email. Please do not reply to
          this message.
        </p>
      </div>
    </div>
  </div>
);
