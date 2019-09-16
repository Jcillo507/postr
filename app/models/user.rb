class User < ApplicationRecord
  has_many :posts
  has_many :comments
  has_secure_password
  before_save { self.email = email.downcase }
  validates :name, presence: true
  validates :email, presence: true,
                    format: { with: URI::MailTo::EMAIL_REGEXP },
                    uniqueness: { case_sensitive: false }

  validates :password, length: { minimum: 6 }
end
