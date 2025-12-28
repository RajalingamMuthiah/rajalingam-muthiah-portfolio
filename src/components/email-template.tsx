import * as React from "react";

interface EmailTemplateProps {
  fullName: string;
  email: string;
  message: string;
}

/**
 * Email template for contact form submissions
 * Sent to the portfolio owner
 * Includes sender info and message content with professional formatting
 */
export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  fullName,
  email,
  message,
}) => (
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
          📧 New Contact Message
        </h1>
        <p
          style={{
            margin: "0",
            fontSize: "14px",
            color: "#666",
          }}
        >
          Submitted via portfolio contact form
        </p>
      </div>

      {/* Sender Info */}
      <div
        style={{
          backgroundColor: "#f5f5f5",
          border: "1px solid #e0e0e0",
          borderRadius: "6px",
          padding: "16px",
          marginBottom: "24px",
        }}
      >
        <div style={{ marginBottom: "8px" }}>
          <p
            style={{
              margin: "0 0 4px 0",
              fontSize: "12px",
              fontWeight: "bold",
              textTransform: "uppercase" as const,
              letterSpacing: "0.5px",
              color: "#999",
            }}
          >
            From
          </p>
          <p
            style={{
              margin: "0",
              fontSize: "18px",
              fontWeight: "bold",
              color: "#1a1a1a",
            }}
          >
            {fullName}
          </p>
        </div>
        <div>
          <p
            style={{
              margin: "0 0 4px 0",
              fontSize: "12px",
              fontWeight: "bold",
              textTransform: "uppercase" as const,
              letterSpacing: "0.5px",
              color: "#999",
            }}
          >
            Email
          </p>
          <p
            style={{
              margin: "0",
              fontSize: "14px",
              color: "#0066cc",
              wordBreak: "break-all" as const,
            }}
          >
            <a
              href={`mailto:${email}`}
              style={{
                color: "#0066cc",
                textDecoration: "none",
              }}
            >
              {email}
            </a>
          </p>
        </div>
      </div>

      {/* Message Content */}
      <div>
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
          Message
        </p>
        <div
          style={{
            backgroundColor: "#fafafa",
            border: "1px solid #e0e0e0",
            borderRadius: "6px",
            padding: "16px",
            marginBottom: "24px",
          }}
        >
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
      </div>

      {/* Footer CTA */}
      <div
        style={{
          marginTop: "32px",
          padding: "16px",
          backgroundColor: "#f0f7ff",
          borderRadius: "6px",
          textAlign: "center" as const,
        }}
      >
        <p
          style={{
            margin: "0",
            fontSize: "14px",
            color: "#555",
            lineHeight: "1.5",
          }}
        >
          Reply directly to this email or click the link below to respond
        </p>
        <div style={{ marginTop: "12px" }}>
          <a
            href={`mailto:${email}`}
            style={{
              display: "inline-block",
              backgroundColor: "#0066cc",
              color: "#ffffff",
              padding: "10px 20px",
              borderRadius: "4px",
              textDecoration: "none",
              fontSize: "14px",
              fontWeight: "bold",
            }}
          >
            Reply to {fullName}
          </a>
        </div>
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
          Message sent from your portfolio contact form
        </p>
      </div>
    </div>
  </div>
);
