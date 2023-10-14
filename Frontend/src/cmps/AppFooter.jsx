import { UserMsg } from './UserMsg.jsx'
import { galleryService } from '../services/gallery.service.js'

export function AppFooter() {
    const { socialMediaLinks } = galleryService

    return (
        <footer className="app-footer flex row full">
            <h1 className="logo">Giggler</h1>
            <h2>© Giggler International Ltd. 2023</h2>
            <div className="social-icons flex row">
                {socialMediaLinks.map((link, idx) => (
                    <div key={idx} className="icon-container">
                        <a href={link.url} target="_blank" rel="noopener noreferrer">
                            <img src={link.img} alt="Social Media Icon" />
                        </a>
                    </div>
                ))}
            </div>
            <div className="access-icon">
                <svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="16" cy="16" r="15.5" className="circle-wrapper"></circle>
                    <path
                        d="M16 11.5833C17.1506 11.5833 18.0834 10.6506 18.0834 9.49999C18.0834 8.3494 17.1506 7.41666 16 7.41666C14.8494 7.41666 13.9167 8.3494 13.9167 9.49999C13.9167 10.6506 14.8494 11.5833 16 11.5833Z"
                        className="person-head"></path>
                    <path
                        d="M23.9167 12.4167H8.08333C7.86232 12.4167 7.65036 12.5045 7.49408 12.6607C7.3378 12.817 7.25 13.029 7.25 13.25C7.25 13.471 7.3378 13.683 7.49408 13.8392C7.65036 13.9955 7.86232 14.0833 8.08333 14.0833H13.5V25.5417C13.5 25.8179 13.6097 26.0829 13.8051 26.2782C14.0004 26.4736 14.2654 26.5833 14.5417 26.5833C14.8179 26.5833 15.0829 26.4736 15.2782 26.2782C15.4736 26.0829 15.5833 25.8179 15.5833 25.5417V19.5H16.4167V25.5417C16.4167 25.8179 16.5264 26.0829 16.7218 26.2782C16.9171 26.4736 17.1821 26.5833 17.4583 26.5833C17.7346 26.5833 17.9996 26.4736 18.1949 26.2782C18.3903 26.0829 18.5 25.8179 18.5 25.5417V14.0833H23.9167C24.1377 14.0833 24.3496 13.9955 24.5059 13.8392C24.6622 13.683 24.75 13.471 24.75 13.25C24.75 13.029 24.6622 12.817 24.5059 12.6607C24.3496 12.5045 24.1377 12.4167 23.9167 12.4167Z"
                        className="person-torso"></path>
                </svg>
            </div>
            <UserMsg />
        </footer>
    )
}