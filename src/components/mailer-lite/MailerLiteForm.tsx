import React, { useState, useRef, useEffect } from 'react'

interface MailerLiteFormProps {
  formId?: string
  userType?: 'host' | 'guest' | 'associate'
}

const MailerLiteForm: React.FC<MailerLiteFormProps> = ({
  formId,
  userType = 'host'
}) => {
  // Get the correct form ID based on user type
  // Form ID mapping:
  // - Host: geLois
  // - Guest: gbXyUX
  // - Associate: hobXMY
  const getFormIdByUserType = (
    type: 'host' | 'guest' | 'associate'
  ): string => {
    switch (type) {
      case 'host':
        return 'geLois'
      case 'guest':
        return 'gbXyUX'
      case 'associate':
        return 'hobXMY'
      default:
        return 'geLois' // Default to host form
    }
  }

  // Use provided formId or determine from userType
  const actualFormId = formId || getFormIdByUserType(userType)
  const [isFormLoading, setIsFormLoading] = useState(true)
  const [hasFormError, setHasFormError] = useState(false)
  const [iframeSrc, setIframeSrc] = useState<string>('')
  const iframeRef = useRef<HTMLIFrameElement>(null)
  const loadTimeoutRef = useRef<NodeJS.Timeout>()

  // Generate HTML content for iframe with MailerLite embedded form
  const getIframeContent = () => {
    return `
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>MailerLite Form</title>
    <style>
        body {
            margin: 0;
            padding: 20px;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            background: white;
        }
        .ml-embedded {
            width: 100%;
        }
    </style>
    <!-- MailerLite Universal -->
    <script>
        (function(w,d,e,u,f,l,n){w[f]=w[f]||function(){(w[f].q=w[f].q||[])
        .push(arguments);},l=d.createElement(e),l.async=1,l.src=u,
        n=d.getElementsByTagName(e)[0],n.parentNode.insertBefore(l,n);})
        (window,document,'script','https://assets.mailerlite.com/js/universal.js','ml');
        ml('account', '1718389');
    </script>
    <!-- End MailerLite Universal -->
</head>
<body>
    <div class="ml-embedded" data-form="${actualFormId}"></div>
</body>
</html>
    `.trim()
  }

  // Create blob URL for iframe content
  const getIframeSrc = () => {
    const blob = new Blob([getIframeContent()], { type: 'text/html' })
    return URL.createObjectURL(blob)
  }

  // Initialize iframe source and handle load events
  useEffect(() => {
    // Create the iframe source
    const src = getIframeSrc()
    setIframeSrc(src)

    const iframe = iframeRef.current
    if (!iframe) return

    const handleLoad = () => {
      setIsFormLoading(false)
      setHasFormError(false)
    }

    const handleError = () => {
      setIsFormLoading(false)
      setHasFormError(true)
    }

    // Set a timeout to handle cases where iframe doesn't trigger load event
    loadTimeoutRef.current = setTimeout(() => {
      if (isFormLoading) {
        setIsFormLoading(false)
        // Don't set error here, let the iframe continue trying to load
      }
    }, 8000) // 8 seconds timeout

    iframe.addEventListener('load', handleLoad)
    iframe.addEventListener('error', handleError)

    return () => {
      iframe.removeEventListener('load', handleLoad)
      iframe.removeEventListener('error', handleError)
      if (loadTimeoutRef.current) {
        clearTimeout(loadTimeoutRef.current)
      }
      // Clean up blob URL
      URL.revokeObjectURL(src)
    }
  }, [actualFormId, isFormLoading])

  // Reset loading state when formId changes
  useEffect(() => {
    setIsFormLoading(true)
    setHasFormError(false)
  }, [actualFormId])

  const getFormTitle = () => {
    switch (userType) {
      case 'host':
        return 'Join as a Host'
      case 'guest':
        return 'Join as a Guest'
      case 'associate':
        return 'Join as an Associate'
      default:
        return 'Join Our Community'
    }
  }

  const getFormDescription = () => {
    switch (userType) {
      case 'host':
        return 'Lead and organize events. Create meaningful experiences for the community.'
      case 'guest':
        return 'Participate and enjoy exclusive access to conferences, meetings, and activities.'
      case 'associate':
        return 'Partner with us and contribute your expertise while gaining valuable connections.'
      default:
        return 'Stay updated with our latest news and events.'
    }
  }

  const isLoading = isFormLoading
  const hasError = hasFormError

  // If there's an error, show the fallback form
  // if (hasError && !isLoading) {
  //   return <MailerLiteFallback userType={userType} />
  // }

  return (
    <div className="mailerlite-form-container">
      {isLoading && (
        <div className="flex items-center justify-center py-8">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
          <span className="ml-3 text-gray-600">Loading form...</span>
        </div>
      )}

      <div className="relative">
        <iframe
          ref={iframeRef}
          src={iframeSrc}
          width="100%"
          height="400"
          style={{
            border: 'none',
            borderRadius: '8px',
            opacity: isLoading ? 0 : 1,
            transition: 'opacity 0.3s ease-in-out'
          }}
          title={`MailerLite Form - ${getFormTitle()}`}
          loading="lazy"
        />
      </div>
    </div>
  )
}

export default MailerLiteForm
