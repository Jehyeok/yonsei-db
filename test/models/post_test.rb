require 'test_helper'

class PostTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end

  test "save images" do
  	post = Post.create
  	post.save
  end
end
