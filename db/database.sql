-- Users Table
CREATE TABLE Users (
    UserID INT PRIMARY KEY,
    FullName VARCHAR(255) NOT NULL,
    Email VARCHAR(255) NOT NULL UNIQUE,
    PasswordHash VARCHAR(255) NOT NULL,
    PhoneNumber VARCHAR(20),
    UserType VARCHAR(50) NOT NULL,  -- Bachelor, Landlord, Admin, etc.
    RegistrationDate DATE NOT NULL,
    ProfilePictureURL VARCHAR(500),
    NationalID VARCHAR(100),
    IsVerified BOOLEAN DEFAULT FALSE,
    Status VARCHAR(50) NOT NULL,
    LastLogin DATE
);

-- BachelorProfile Table
CREATE TABLE BachelorProfile (
    BachelorID INT PRIMARY KEY,
    Budget FLOAT,
    PreferredLocations JSON,
    RoommatePreferences JSON,
    AboutMe TEXT,
    FOREIGN KEY (BachelorID) REFERENCES Users(UserID)
);

-- LandlordProfile Table
CREATE TABLE LandlordProfile (
    LandlordID INT PRIMARY KEY,
    CompanyName VARCHAR(255),
    TotalListings INT DEFAULT 0,
    Rating FLOAT,
    VerifiedStatus BOOLEAN DEFAULT FALSE,
    FOREIGN KEY (LandlordID) REFERENCES Users(UserID)
);

-- Properties Table
CREATE TABLE Properties (
    PropertyID INT PRIMARY KEY,
    LandlordID INT,
    Title VARCHAR(255) NOT NULL,
    Address VARCHAR(255) NOT NULL,
    City VARCHAR(100) NOT NULL,
    PostalCode VARCHAR(20),
    Price FLOAT NOT NULL,
    Description TEXT,
    NumberOfRooms INT NOT NULL,
    Amenities JSON,
    LeaseDuration VARCHAR(50),
    AvailabilityStatus VARCHAR(50) NOT NULL,
    ListingDate DATE NOT NULL,
    IsVerified BOOLEAN DEFAULT FALSE,
    FOREIGN KEY (LandlordID) REFERENCES LandlordProfile(LandlordID)
);

-- PropertyImages Table
CREATE TABLE PropertyImages (
    ImageID INT PRIMARY KEY,
    PropertyID INT,
    ImageURL VARCHAR(500) NOT NULL,
    FOREIGN KEY (PropertyID) REFERENCES Properties(PropertyID)
);

-- RoommateMatches Table
CREATE TABLE RoommateMatches (
    MatchID INT PRIMARY KEY,
    BachelorID1 INT,
    BachelorID2 INT,
    MatchScore FLOAT,
    MatchDate DATE,
    FOREIGN KEY (BachelorID1) REFERENCES BachelorProfile(BachelorID),
    FOREIGN KEY (BachelorID2) REFERENCES BachelorProfile(BachelorID)
);

-- TenantRequests Table
CREATE TABLE TenantRequests (
    RequestID INT PRIMARY KEY,
    PropertyID INT,
    UserID INT,
    RequestType VARCHAR(100) NOT NULL,
    RequestStatus VARCHAR(50) NOT NULL,
    RequestDate DATE NOT NULL,
    ResponseDate DATE,
    FOREIGN KEY (PropertyID) REFERENCES Properties(PropertyID),
    FOREIGN KEY (UserID) REFERENCES Users(UserID)
);

-- Payments Table
CREATE TABLE Payments (
    PaymentID INT PRIMARY KEY,
    UserID INT,
    PropertyID INT,
    Amount FLOAT NOT NULL,
    PaymentMethod VARCHAR(50) NOT NULL,
    PaymentDate DATE NOT NULL,
    Status VARCHAR(50) NOT NULL,
    FOREIGN KEY (UserID) REFERENCES Users(UserID),
    FOREIGN KEY (PropertyID) REFERENCES Properties(PropertyID)
);

-- PropertyRatings Table
CREATE TABLE PropertyRatings (
    RatingID INT PRIMARY KEY,
    PropertyID INT,
    BachelorID INT,
    RatingValue FLOAT NOT NULL,
    ReviewText TEXT,
    DateCreated DATE NOT NULL,
    FOREIGN KEY (PropertyID) REFERENCES Properties(PropertyID),
    FOREIGN KEY (BachelorID) REFERENCES BachelorProfile(BachelorID)
);

-- Notifications Table
CREATE TABLE Notifications (
    NotificationID INT PRIMARY KEY,
    UserID INT,
    Message TEXT NOT NULL,
    NotificationType VARCHAR(50) NOT NULL,
    IsRead BOOLEAN DEFAULT FALSE,
    NotificationDate DATE NOT NULL,
    FOREIGN KEY (UserID) REFERENCES Users(UserID)
);

-- AdminActions Table
CREATE TABLE AdminActions (
    ActionID INT PRIMARY KEY,
    AdminID INT,
    ActionType VARCHAR(255) NOT NULL,
    TargetID INT,
    ActionDetails TEXT,
    ActionDate DATE NOT NULL,
    FOREIGN KEY (AdminID) REFERENCES Users(UserID)
);

-- APIInteractions Table
CREATE TABLE APIInteractions (
    InteractionID INT PRIMARY KEY,
    UserID INT,
    APIType VARCHAR(255) NOT NULL,
    DateAccessed DATE NOT NULL,
    ResponseStatus VARCHAR(50),
    FOREIGN KEY (UserID) REFERENCES Users(UserID)
);

-- UserSavedProperties Table
CREATE TABLE UserSavedProperties (
    SavedID INT PRIMARY KEY,
    UserID INT,
    PropertyID INT,
    SavedDate DATE NOT NULL,
    FOREIGN KEY (UserID) REFERENCES Users(UserID),
    FOREIGN KEY (PropertyID) REFERENCES Properties(PropertyID)
);

-- PropertyAmenities Table
CREATE TABLE PropertyAmenities (
    PropertyAmenityID INT PRIMARY KEY,
    PropertyID INT,
    AmenityType VARCHAR(255) NOT NULL,
    FOREIGN KEY (PropertyID) REFERENCES Properties(PropertyID)
);