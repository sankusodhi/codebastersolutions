import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, QrCode } from "lucide-react";

const Feedback = () => {
  const formUrl = "https://docs.google.com/forms/d/1sDYnHrdCh127fGWWH67bJN3081yG0psW-dJ-5S89YLI/preview";
  
  // QR Code URL using a QR code generation service
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(formUrl)}`;

  return (
    <section id="feedback" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Share Your Feedback</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Your feedback is valuable to us. Help us improve our services by sharing your experience and suggestions.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Feedback Form Info */}
            <Card className="hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <ExternalLink className="w-5 h-5 text-primary" />
                  <span>Feedback Form</span>
                </CardTitle>
                <CardDescription>
                  Click the button below to open our feedback form and share your thoughts about our services, team, and overall experience.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <h4 className="font-medium">What can you share:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Service quality and satisfaction</li>
                    <li>• Project experience and communication</li>
                    <li>• Suggestions for improvement</li>
                    <li>• Overall rating and testimonials</li>
                  </ul>
                </div>
                <Button 
                  className="w-full"
                  onClick={() => window.open(formUrl, '_blank')}
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Open Feedback Form
                </Button>
              </CardContent>
            </Card>

            {/* QR Code */}
            <Card className="hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <QrCode className="w-5 h-5 text-primary" />
                  <span>Scan QR Code</span>
                </CardTitle>
                <CardDescription>
                  Scan the QR code with your mobile device to quickly access our feedback form.
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <div className="bg-white p-4 rounded-lg inline-block shadow-sm">
                  <img 
                    src={qrCodeUrl} 
                    alt="Feedback Form QR Code" 
                    className="w-48 h-48 mx-auto"
                    onError={(e) => {
                      e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='%23f3f4f6'/%3E%3Ctext x='100' y='100' text-anchor='middle' dy='0.3em' font-family='sans-serif' font-size='14' fill='%236b7280'%3EQR Code%3C/text%3E%3C/svg%3E";
                    }}
                  />
                </div>
                <p className="text-sm text-muted-foreground mt-4">
                  Point your camera at the QR code to open the form
                </p>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-12">
            <div className="bg-primary/5 rounded-lg p-6 max-w-2xl mx-auto">
              <h3 className="font-semibold text-primary mb-2">Why Your Feedback Matters</h3>
              <p className="text-sm text-muted-foreground">
                Your feedback helps us understand what we're doing well and where we can improve. 
                Every response is reviewed by our team to ensure we continue delivering exceptional service 
                and exceed your expectations in future projects.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feedback;